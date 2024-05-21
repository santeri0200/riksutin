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
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from '../../styles'
import { useUserEntries } from '../../hooks/useEntry'

const { riskColors, resultStyles } = styles

const UserPage = () => {
  const { entries } = useUserEntries()
  const { t } = useTranslation()

  if (!entries) return null

  return (
    <Box
      sx={{
        alignSelf: 'flex-start',
        width: '100%',
        bgcolor: 'background.paper',
        mx: 2,
        mt: 4,
      }}
    >
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" sx={{ my: 4, pl: 1 }}>
          {t('userPage:previousEntries')}
        </Typography>
      </Box>
      <TableContainer sx={{ m: 2 }}>
        <Table sx={{ maxWidth: '30rem' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>{t('userPage:tableDate')}</TableCell>
              <TableCell align="center">
                {t('userPage:tableTotalRiskLevel')}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry.id} data-testid="entrybox">
                <TableCell component="th" scope="row">
                  <Link to={`/user/${entry.id.toString()}`}>
                    {new Date(entry.createdAt).toLocaleDateString()}{' '}
                    {new Date(entry.createdAt).toLocaleTimeString()}
                  </Link>
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

export default UserPage
