import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { useUserEntries } from '../../hooks/useEntry'

const UserPage = () => {
  const { entries } = useUserEntries()
  const { t } = useTranslation()

  if (!entries) return null

  return (
    <Box
      sx={{
        alignSelf: 'flex-start',
        width: '100%',
        m: 3,
      }}
    >
      <Box>
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          {t('userPage:previousEntries')}
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
          <Link to={`/user/${entry.id.toString()}`}>
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

export default UserPage
