import React from 'react'
import { Box, Typography } from '@mui/material'
import { useEntries } from '../../../hooks/useEntry'

const Summary = () => {
  const { entries } = useEntries()

  if (!entries) return null

  return (
    <Box sx={{ m: 2 }}>
      <Box>
        <Typography variant="h6" component="div" sx={{ mb: 2 }}>
          Kaikki täytetyt kyselyt
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
          <Typography variant="body1">
            {new Date(entry.createdAt).toLocaleDateString()}{' '}
            {new Date(entry.createdAt).toLocaleTimeString()}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export default Summary
