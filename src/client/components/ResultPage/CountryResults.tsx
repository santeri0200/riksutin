import React from 'react'

import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useCountry from '../../hooks/useCountryData'

import styles from '../../styles'

const { resultStyles } = styles

const CountryResults = ({ selectedCountryCode, selectedCountry }: any) => {
  const { country } = useCountry(selectedCountryCode)
  const { t } = useTranslation()

  if (!country) return null

  const { code, universities, ...riskValues } = country

  const filteredRiskValues = Object.values(riskValues).filter(
    (value) => value != null && typeof value === 'number'
  )

  const totalRiskLevel = Math.round(
    filteredRiskValues.reduce((a, b) => a + b, 0) / filteredRiskValues.length
  )

  return (
    <Box>
      <Box sx={resultStyles.card}>
        {t('results:selectedCountry')}: {selectedCountry}
      </Box>
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
      <Box sx={resultStyles.card}>
        <b>
          {t('results:countryRiskLevel')}: {totalRiskLevel}
        </b>
      </Box>
    </Box>
  )
}

export default CountryResults
