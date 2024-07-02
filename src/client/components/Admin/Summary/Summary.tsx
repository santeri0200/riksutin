/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-nested-ternary */
import React, { useMemo, useState } from 'react'
import {
  MRT_Row,
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table'
import { Box, Button, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import { utils, writeFile } from 'xlsx'
import { Link } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
import { Question } from '@backend/types'
import { Entry, Faculty } from '../../../types'
import { useEntries } from '../../../hooks/useEntry'
import useQuestions from '../../../hooks/useQuestions'
import useDeleteEntryMutation from '../../../hooks/useDeleteEntryMutation'
import styles from '../../../styles'
import useFaculties from '../../../hooks/useFaculties'
import { extraOrganisations } from '../../../util/organisations'

const { riskColors } = styles

type TableValues = {
  [key: string]: any
}

const createTableData = (
  entries: Entry[],
  questions: Question[],
  faculties: Faculty[]
) => {
  const multiChoiceQuestions = questions
    .filter(
      (question) =>
        question.optionData.type ===
        ('multipleChoice' || 'highRiskCountrySelect')
    )
    .map((q) => q.id)

  const singleChoiceQuestions = questions
    .filter((question) => question.optionData.type === 'singleChoice')
    .map((q) => q.id)

  const questionIds = questions.map((q) => q.id)

  const updatedEntries: any[] = []

  entries.forEach((entry) => {
    if (entry.data.answers.selectOrganisation) {
      // eslint-disable-next-line no-param-reassign
      entry.data.answers[22] = entry.data.answers.selectOrganisation
    }

    const formData = Object.fromEntries(
      questionIds.map((id) => [id, entry.data.answers[id] ?? ''])
    )

    const formattedFormData = Object.fromEntries(
      Object.entries(formData).map((pair) => {
        const idAsInt = parseInt(pair[0], 10)
        if (singleChoiceQuestions.includes(idAsInt)) {
          const text = questions
            .find((q) => q.id === idAsInt)
            ?.optionData.options.find((o: { id: any }) => o.id === pair[1])
            ?.title.fi
          return [pair[0], text]
        }
        if (multiChoiceQuestions.includes(idAsInt)) {
          const texts = pair[1].map(
            (value: string) =>
              questions
                .find((question) => question.id === idAsInt)
                ?.optionData.options.find((option) => option.id === value)
                ?.title.fi
          )

          return [pair[0], texts.join(', ') ?? '']
        }
        return pair
      })
    )

    const additionalValues = {
      id: entry.id,
      projectName: entry.data.answers[3],
      date: `${new Date(entry.createdAt).toLocaleDateString()} ${new Date(
        entry.createdAt
      ).toLocaleTimeString()}`,
      total: entry.data.risks.find((r) => r.id === 'total')?.level,
    }

    const faculty = faculties.find((f) => f.code === entry.data.answers.faculty)
      ?.name.fi

    const obj = { ...additionalValues, ...formattedFormData, faculty }

    updatedEntries.push(obj)
  })

  return updatedEntries
}

const Table = ({
  tableValues,
  questionTitles,
}: {
  tableValues: TableValues[]
  questionTitles: { [key: string]: string }
}) => {
  const deleteMutation = useDeleteEntryMutation()

  const columns = useMemo<MRT_ColumnDef<TableValues>[]>(
    () =>
      tableValues.length
        ? Object.keys(tableValues[0]).map((columnId) => ({
            header: questionTitles[columnId] ?? columnId,
            accessorKey: columnId,
            id: columnId,
            Cell: ({ cell, row }) => (
              <Box
                component="span"
                sx={() => ({
                  ...(columnId === 'total' && {
                    backgroundColor:
                      cell.getValue<number>() === 1
                        ? riskColors[1]
                        : cell.getValue<number>() === 2
                        ? riskColors[2]
                        : riskColors[3],
                    borderRadius: '0.25rem',
                    fontWeight: 'bold',
                    p: '0.75rem',
                  }),
                })}
              >
                {columnId === 'projectName' ? (
                  <Link to={`/admin/entry/${row.getValue('id')}`}>
                    {cell.getValue<string>()}
                  </Link>
                ) : (
                  cell.getValue<number>()
                )}
              </Box>
            ),
          }))
        : [],
    [tableValues]
  )

  const columnIds = Object.keys(tableValues[0])

  const [columnOrder, setColumnOrder] = useState([
    'projectName',
    'date',
    'total',
    '1',
    'faculty',
    ...columnIds,
  ])

  if (!columnOrder) return null

  const handleDeleteRiskAssessment = (row: MRT_Row<TableValues>) => {
    // eslint-disable-next-line no-alert
    if (!window.confirm('Haluatko poistaa valitun riskiarvion?')) return

    try {
      deleteMutation.mutate(row.original.id.toString())
      enqueueSnackbar('Riskiarvio poistettu', { variant: 'success' })
    } catch (error: any) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  const handleExportRows = (rows: MRT_Row<TableValues>[]) => {
    const date = new Date()
    const timeStamp = `${date.getDate()}${
      date.getMonth() + 1
    }${date.getFullYear()}_${date.getHours()}${date.getMinutes()}${date.getSeconds()}`
    const fileName = `risk_i_summary_${timeStamp}.xlsx`

    const originalData = rows.map((r) => r.original)
    const worksheet = utils.json_to_sheet(originalData)
    const workbook = utils.book_new()
    utils.book_append_sheet(workbook, worksheet, 'Riskiarviot')
    writeFile(workbook, fileName, { compression: true })
  }

  const table = useMaterialReactTable({
    columns,
    data: tableValues,
    enableColumnOrdering: true,
    enableGlobalFilter: false,
    enableRowActions: true,
    muiTableBodyRowProps: { hover: false },
    muiTableBodyCellProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .5)',
      },
    },
    muiTablePaperProps: {
      sx: {
        border: '1px solid rgba(81, 81, 81, .2)',
      },
    },
    initialState: { columnVisibility: { id: false } },
    renderRowActions: ({ row }) => (
      <IconButton onClick={() => handleDeleteRiskAssessment(row)}>
        <DeleteIcon />
      </IconButton>
    ),
    state: {
      columnOrder,
    },
    onColumnOrderChange: setColumnOrder,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          padding: '8px',
          flexWrap: 'wrap',
        }}
      >
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          startIcon={<FileDownloadIcon />}
          variant="outlined"
        >
          Luo XLSX-tiedosto
        </Button>
      </Box>
    ),
  })

  return <MaterialReactTable table={table} />
}

const Summary = () => {
  const { entries } = useEntries()
  const { questions } = useQuestions(1)
  const { faculties, isLoading: facultiesLoading } = useFaculties()

  if (!questions || !entries || facultiesLoading || !faculties) return null

  const organisations = faculties.concat(extraOrganisations)

  const entriesWithData = entries.filter(
    (entry) => entry.data.answers && entry.data.country && entry.data.risks
  )

  if (!entriesWithData)
    return (
      <Box sx={{ m: 3 }}>
        <Typography variant="h6" sx={{ my: 4, pl: 1 }}>
          Ei täytettyjä kyselyitä
        </Typography>
      </Box>
    )

  const tableData = createTableData(entriesWithData, questions, organisations)

  const questionTitles = Object.fromEntries(
    questions.map((q) => [q.id.toString(), q.title.fi])
  )

  return (
    <>
      <Typography variant="h5" m={4}>
        Kaikki valmiit riskiarviot
      </Typography>
      <Box
        sx={{
          width: '100%',
          px: 8,
        }}
      >
        <Table tableValues={tableData} questionTitles={questionTitles} />
      </Box>
    </>
  )
}

export default Summary
