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
              <TableCell>Yhteistyöprojektin nimi</TableCell>
              <TableCell align="center">Päivämäärä</TableCell>
              <TableCell align="center">Käyttäjä</TableCell>
              <TableCell align="center">Kokonaisriskitaso</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entriesWithData.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell component="th" scope="row">
                  <Link to={`/user/${entry.id.toString()}`}>
                    {entry.data.answers['3']}
                  </Link>
                </TableCell>
                <TableCell component="th" scope="row">
                  {new Date(entry.createdAt).toLocaleDateString()}{' '}
                  {new Date(entry.createdAt).toLocaleTimeString()}
                </TableCell>
                <TableCell align="center" colSpan={1}>
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
