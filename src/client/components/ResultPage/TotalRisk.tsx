import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'
import { Question } from '@backend/types'
import { countryRisk, universityRisk } from '../../util/risks'

import useCountry from '../../hooks/useCountryData'
import { useResultData } from '../../contexts/ResultDataContext'

import styles from '../../styles'

const { resultStyles } = styles

const TotalRisk = ({
  selectedCountryCode,
  questions,
}: {
  selectedCountryCode: string | undefined
  questions: Question[]
}) => {
  const { t } = useTranslation()
  const { resultData } = useResultData()
  const { country } = useCountry(selectedCountryCode)

  if (!resultData) return null

  const possibleRiskLevels = [0, 1, 2, 3, 4, 5]

  const fundingRisk = questions
    .filter((question) => [14, 15].includes(question.id))
    ?.map(
      (question) =>
        question.optionData.options.find(
          (o) => o.id === resultData[question.id]
        )?.risk
    )
    .reduce((a, b) => a * b, 1)

  const funderRisk = questions
    .find((question) => question.id === 13)
    ?.optionData.options.find((o) => o.id === resultData[13])?.risk

  const riskArray = [
    {
      id: 1,
      text: t('risks:countryRiskLevel'),
      riskLevel: countryRisk(country),
    },
    {
      id: 2,
      text: t('risks:universityRiskLevel'),
      riskLevel: universityRisk(resultData['20'], resultData['21']),
    },
    {
      id: 3,
      text: t('risks:funderRiskLevel'),
      riskLevel: funderRisk,
    },
    {
      id: 4,
      text: t('risks:fundingRiskLevel'),
      riskLevel: fundingRisk,
    },
  ].filter((value) => possibleRiskLevels.includes(value.riskLevel))

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
        {t('risks:totalRiskLevel')}: {totalRisk}
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
