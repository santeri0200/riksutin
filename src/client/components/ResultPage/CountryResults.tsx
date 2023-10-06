import React from 'react'

import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useCountry from '../../hooks/useCountryData'

import styles from '../../styles'

const { resultStyles } = styles

const CountryResults = ({ selectedCountryCode }: any) => {
  const { country } = useCountry(selectedCountryCode)
  const { t } = useTranslation()

  return (
    <>
      <Box sx={resultStyles.card}>
        {t('results:corruptionRank')}: {country?.corruption}
      </Box>
      <Box sx={resultStyles.card}>
        {t('results:stabilityRank')}: {country?.stability}
      </Box>
      <Box sx={resultStyles.card}>
        {t('results:HCIrank')}: {country?.hci}
      </Box>
      <Box sx={resultStyles.card}>
        {t('results:safetyLevel')}: {country?.safetyLevel}
      </Box>
    </>
  )
}

export default CountryResults
