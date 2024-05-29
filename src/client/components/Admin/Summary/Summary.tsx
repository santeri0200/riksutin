import React, { useMemo } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table'
import { useTranslation } from 'react-i18next'
import { Box, Typography } from '@mui/material'
import { useEntries } from '../../../hooks/useEntry'
import useQuestions from '../../../hooks/useQuestions'
// example data type

type TableValues = {
  projectName: string
  date: string
  user: string
  total: number
}
const columnNames = {
  projectName: 'Yhteistyöprojektin nimi',
  date: 'Päivämäärä',
  user: 'Käyttäjä',
  total: 'Kokonaisriskitaso',
} as const

const Table = ({ tableValues }: { tableValues: TableValues[] }) => {
  const columns = useMemo<MRT_ColumnDef<TableValues>[]>(
    () =>
      tableValues.length
        ? Object.keys(tableValues[0]).map((columnId) => ({
            header: columnNames[columnId as keyof TableValues] ?? columnId,
            accessorKey: columnId,
            id: columnId,
          }))
        : [],
    [tableValues]
  )

  const table = useMaterialReactTable({
    columns,
    data: tableValues,
  })

  return <MaterialReactTable table={table} />
}

const Summary = () => {
  const { t } = useTranslation()
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
    projectName: entry.data.answers[3],
    date: `${new Date(entry.createdAt).toLocaleDateString()} ${new Date(
      entry.createdAt
    ).toLocaleTimeString()}`,
    user: `${entry.User.firstName} ${entry.User.lastName}`,
    total: entry.data.risks.find((r) => r.id === 'total')?.level,
  }))

  return <Table tableValues={tableValues} />
}

export default Summary
