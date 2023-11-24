import React from 'react'

import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { Locales, Result } from '@backend/types'
import styles from '../../styles'
import { CountryData } from '../../types'
import RiskElement from './RiskElement'

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
      <RiskElement
        infoText={corruptionText}
        resultText={t('results:corruptionRank')}
        risk={country.corruption}
      />
      <RiskElement
        resultText={t('results:stabilityRank')}
        risk={country.stability}
      />
      <RiskElement resultText={t('results:HCIrank')} risk={country.hci} />
      <RiskElement
        infoText={safetyLevelText}
        resultText={t('results:safetyLevel')}
        risk={country.safetyLevel}
      />
    </Box>
  )
}

export default CountryResults
