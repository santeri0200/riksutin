import React from 'react'
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import useSurvey from '../../hooks/useSurvey'
import styles from '../../styles'

import { useUserEntries } from '../../hooks/useEntry'
import UserEntry from './UserEntry'

const { formStyles } = styles

const UserPage = () => {
  const { entries } = useUserEntries()
  const { survey } = useSurvey()
  const { t } = useTranslation()

  if (!survey) return null

  return (
    <Box sx={formStyles.formWrapper}>
      <Box sx={{ margin: '15px' }}>
        <Typography variant="h4">{t('userPage:previousEntries')}</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: '40%' }} aria-label="entry table">
          <TableBody>
            {entries?.map((entry) => (
              <UserEntry key={entry.id} entry={entry} survey={survey} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default UserPage
