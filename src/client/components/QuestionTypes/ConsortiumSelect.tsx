import React from 'react'
import { Box, List, ListItem } from '@mui/material'

import { useTranslation } from 'react-i18next'
import { InputProps } from '../../types'
import { useHighRiskCountries } from '../../hooks/useCountries'

const ConsortiumSelect = ({
  control,
  question,
  children,
  language,
}: InputProps) => {
  const { countries } = useHighRiskCountries()
  const { t } = useTranslation()

  if (!question || !countries) return null

  return (
    <Box>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 300,
          '& ul': { padding: 0 },
        }}
      >
        {countries.map((country) => (
          <ListItem key={country.code}>{country.name}</ListItem>
        ))}
      </List>
    </Box>
  )
}

export default ConsortiumSelect
