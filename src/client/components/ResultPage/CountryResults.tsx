import React from 'react'

import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { Locales, Result } from '@backend/types'
import styles from '../../styles'
import { CountryData } from '../../types'
import Markdown from '../Common/Markdown'

const { resultStyles } = styles

const CountryResults = ({
  country,
  results,
}: {
  country: CountryData | undefined
  results: Result[]
}) => {
  const { t, i18n } = useTranslation()

  if (!country) return null

  const { language } = i18n

  const corruptionText = results.find(
    (r) => r.optionLabel === `corruptionLevel${country.corruption}`
  )?.isSelected[language as keyof Locales]
  const safetyLevelText = results.find(
    (r) => r.optionLabel === `safetyLevel${country.safetyLevel}`
  )?.isSelected[language as keyof Locales]

  return (
    <Box sx={resultStyles.resultWrapper}>
      {country.corruption && (
        <Box sx={resultStyles.card}>
          {t('results:corruptionRank')}: {country.corruption}
          {corruptionText && <Markdown>{corruptionText}</Markdown>}
        </Box>
      )}
      <Box sx={resultStyles.card}>
        {t('results:stabilityRank')}: {country.stability}
      </Box>
      <Box sx={resultStyles.card}>
        {t('results:HCIrank')}: {country.hci}
      </Box>
      {country.safetyLevel && (
        <Box sx={resultStyles.card}>
          {t('results:safetyLevel')}: {country.safetyLevel}
          {safetyLevelText && <Markdown>{safetyLevelText}</Markdown>}
        </Box>
      )}
    </Box>
  )
}

export default CountryResults
