import React from 'react'

import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useCountry from '../../hooks/useCountryData'

import styles from '../../styles'
import { CountryData } from '../../types'

const { resultStyles } = styles

const CountryResults = ({ country }: { country: CountryData | undefined }) => {
  const { t } = useTranslation()

  if (!country) return null

  return (
    <Box sx={resultStyles.resultWrapper}>
      <Box sx={resultStyles.card}>
        {t('results:corruptionRank')}: {country.corruption}
      </Box>
      <Box sx={resultStyles.card}>
        {t('results:stabilityRank')}: {country.stability}
      </Box>
      <Box sx={resultStyles.card}>
        {t('results:HCIrank')}: {country.hci}
      </Box>
      <Box sx={resultStyles.card}>
        {t('results:safetyLevel')}: {country.safetyLevel}
      </Box>
    </Box>
  )
}

export default CountryResults
