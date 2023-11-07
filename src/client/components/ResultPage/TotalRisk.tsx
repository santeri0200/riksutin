import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'
import { countryRisk, universityRisk } from '../../util/risks'

import useCountry from '../../hooks/useCountryData'
import { useResultData } from '../../contexts/ResultDataContext'

import styles from '../../styles'

const { resultStyles } = styles

const TotalRisk = ({
  selectedCountryCode,
}: {
  selectedCountryCode: string | undefined
}) => {
  const { t } = useTranslation()
  const { resultData } = useResultData()
  const { country } = useCountry(selectedCountryCode)

  if (!resultData) return null

  const riskArray = [
    {
      id: 1,
      text: t('results:countryRiskLevel'),
      riskLevel: countryRisk(country),
    },
    {
      id: 2,
      text: t('results:universityRiskLevel'),
      riskLevel: universityRisk(resultData['20'], resultData['21']),
    },
  ].filter((value) => value.riskLevel != null)

  if (riskArray.length === 0) return null

  const totalRisk = Math.round(
    (riskArray.map((value) => value.riskLevel) as number[]).reduce(
      (a, b) => a + b,
      0
    ) / riskArray.length
  )

  return (
    <Box sx={resultStyles.card}>
      <b>
        {t('results:totalRiskLevel')}: {totalRisk}
      </b>
      {riskArray.map(
        (risk) =>
          risk.riskLevel === 4 && (
            <Box key={risk.id} sx={resultStyles.card}>
              {risk.text}: {risk.riskLevel}
            </Box>
          )
      )}
    </Box>
  )
}

export default TotalRisk
