/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-nested-ternary */
import React, { useMemo } from 'react'
import {
  MRT_Row,
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table'
import { Box, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
import { useEntries } from '../../../hooks/useEntry'
import useQuestions from '../../../hooks/useQuestions'
import useDeleteEntryMutation from '../../../hooks/useDeleteEntryMutation'
import styles from '../../../styles'

const { riskColors } = styles

type TableValues = {
  id: number
  projectName: string
  date: string
  user: string
  total: number
}
const columnNames = {
  id: 'ID',
  projectName: 'Yhteistyöprojektin nimi',
  date: 'Päivämäärä',
  user: 'Käyttäjä',
  total: 'Kokonaisriskitaso',
} as const

const Table = ({ tableValues }: { tableValues: TableValues[] }) => {
  const deleteMutation = useDeleteEntryMutation()

  const columns = useMemo<MRT_ColumnDef<TableValues>[]>(
    () =>
      tableValues.length
        ? Object.keys(tableValues[0]).map((columnId) => ({
            header: columnNames[columnId as keyof TableValues] ?? columnId,
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

  const table = useMaterialReactTable({
    columns,
    data: tableValues,
    enableColumnOrdering: true, // enable a feature for all columns
    enableGlobalFilter: false, // turn off a feature
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
  })

  return <MaterialReactTable table={table} />
}

const Summary = () => {
  const { entries } = useEntries()
  const { questions } = useQuestions(1)

  if (!questions) return null

  const entriesWithData = entries?.filter(
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

  const tableValues: TableValues[] = entriesWithData.map((entry) => ({
    id: entry.id,
    projectName: entry.data.answers[3],
    date: `${new Date(entry.createdAt).toLocaleDateString()} ${new Date(
      entry.createdAt
    ).toLocaleTimeString()}`,
    user: `${entry.User.firstName} ${entry.User.lastName}`,
    total: entry.data.risks.find((r) => r.id === 'total')?.level,
  }))

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
        <Table tableValues={tableValues} />
      </Box>
    </>
  )
}

export default Summary
