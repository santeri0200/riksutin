import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEntries } from '../../../hooks/useEntry'

const Summary = () => {
  const { t } = useTranslation()
  const { entries } = useEntries()

  if (!entries) return null

  return (
    <Box sx={{ m: 2 }}>
      <Box>
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          {t('admin:summaryTitle')}
        </Typography>
      </Box>
      {entries?.map((entry) => (
        <Box
          key={entry.id}
          sx={{
            mb: 2,
            p: 1.5,
            border: 'solid',
            borderColor: 'lightgray',
            maxWidth: '200px',
          }}
          data-testid="entrybox"
        >
          <Link to={`./entry/${entry.id.toString()}`}>
            <Typography variant="body1">
              {new Date(entry.createdAt).toLocaleDateString()}{' '}
              {new Date(entry.createdAt).toLocaleTimeString()}
            </Typography>
          </Link>
        </Box>
      ))}
    </Box>
  )
}

export default Summary
