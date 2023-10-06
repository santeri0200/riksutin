import React from 'react'

import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useCountry from '../../hooks/useCountryData'

import styles from '../../styles'

const { resultStyles } = styles

const riskLevelCheck = (
  start: number,
  end: number,
  intervals: number,
  res: number
) => {
  const riskLevel = ['Erittäin huono', 'Huono', 'Hyvä', 'Erittäin hyvä']
  const distance = Math.abs(start - end)
  const intervalCounter = distance / intervals

  let startOfInterval = start
  let endOfInterval = start + intervalCounter
  for (let step = 0; step < intervals; step += 1) {
    if (res > startOfInterval && res < endOfInterval) {
      return riskLevel[step]
    }
    startOfInterval = start + intervalCounter
    endOfInterval += intervalCounter
  }
  return ''
}

const CountryResults = ({ selectedCountryCode }: any) => {
  const { country } = useCountry(selectedCountryCode)
  const { t } = useTranslation()

  if (!country) return null

  return (
    <>
      <Box sx={resultStyles.card}>
        {t('results:corruptionRank')}:{' '}
        {riskLevelCheck(-2.5, 2.5, 4, country.corruption)}
      </Box>
      <Box sx={resultStyles.card}>
        {t('results:stabilityRank')}:{' '}
        {riskLevelCheck(0, 100, 4, country.stability)}
      </Box>
      <Box sx={resultStyles.card}>
        {t('results:HCIrank')}: {riskLevelCheck(0, 1, 4, country.hci)}
      </Box>
      <Box sx={resultStyles.card}>
        {t('results:safetyLevel')}: {country?.safetyLevel}
      </Box>
    </>
  )
}

export default CountryResults
