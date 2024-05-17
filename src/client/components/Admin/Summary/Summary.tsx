import React from 'react'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from '../../../styles'
import { useEntries } from '../../../hooks/useEntry'

const { riskColors, resultStyles } = styles

const Summary = () => {
  const { t } = useTranslation()
  const { entries } = useEntries()

  if (!entries) return null

  return (
    <Box sx={{ mx: 2, mt: 4 }}>
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" sx={{ my: 4, pl: 1 }}>
          Kaikki täytetyt kyselyt
        </Typography>
      </Box>
      <TableContainer sx={{ m: 2 }}>
        <Table sx={{ maxWidth: '40rem' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Päivämäärä</TableCell>
              <TableCell align="center">Nimi</TableCell>
              <TableCell align="center">Kokonaisriskitaso</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell component="th" scope="row">
                  <Link to={`./entry/${entry.id.toString()}`}>
                    {new Date(entry.createdAt).toLocaleDateString()}{' '}
                    {new Date(entry.createdAt).toLocaleTimeString()}
                  </Link>
                </TableCell>
                <TableCell align="center">
                  {entry.User.firstName} {entry.User.lastName}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={[
                      {
                        backgroundColor:
                          riskColors[
                            entry.data.risks.find((r) => r.id === 'total')
                              ?.level > 3
                              ? 3
                              : entry.data.risks.find((r) => r.id === 'total')
                                  ?.level
                          ],
                      },
                      resultStyles.tableCell,
                    ]}
                  >
                    {entry.data.risks.find((r) => r.id === 'total')?.level}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Summary
