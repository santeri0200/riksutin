import React from 'react'

import { useTranslation } from 'react-i18next'

import { Locales, Result } from '@backend/types'

import { CountryData, FormValues } from '../../types'
import RiskElement from './RiskElement'

import { gdprRisk } from '../../util/algorithm/risks'

const CountryRisks = ({
  country,
  results,
  resultData,
}: {
  country: CountryData | undefined
  results: Result[]
  resultData: FormValues
}) => {
  const { t, i18n } = useTranslation()

  if (!country) return null

  const { language } = i18n

  const sanctionsRisk = country.sanctions ? 2 : 1
  const sanctionsMultiplier =
    sanctionsRisk === 2 && resultData['11'].research ? 1.5 : 1

  const safetyLevelMultiplier =
    (country.safetyLevel === 2 || country.safetyLevel === 3) &&
    (resultData['11'].studentMobility || resultData['11'].staffMobility)
      ? 1.5
      : 1

  const corruptionText = results.find(
    (r) => r.optionLabel === `corruptionLevel${country.corruption}`
  )?.isSelected[language as keyof Locales]
  const safetyLevelText = results.find(
    (r) => r.optionLabel === `safetyLevel${country.safetyLevel}`
  )?.isSelected[language as keyof Locales]
  const academicFreedomText = results.find(
    (r) => r.optionLabel === `academicFreedomLevel${country.academicfreedom}`
  )?.isSelected[language as keyof Locales]
  const politicalStabilityText = results.find(
    (r) => r.optionLabel === `politicalStabilityLevel${country.stability}`
  )?.isSelected[language as keyof Locales]
  const humanDevelopmentText = results.find(
    (r) => r.optionLabel === `developmentLevel${country.hci}`
  )?.isSelected[language as keyof Locales]
  const gdprText = results.find(
    (r) => r.optionLabel === `gdprRiskLevel${gdprRisk(country, resultData)}`
  )?.isSelected[language as keyof Locales]

  return (
    <>
      <RiskElement
        infoText={corruptionText}
        resultText="riskTable:corruptionRank"
        risk={country.corruption}
        style={{ paddingLeft: '30px' }}
      />
      <RiskElement
        infoText={politicalStabilityText}
        resultText="riskTable:stabilityRank"
        risk={country.stability}
        style={{ paddingLeft: '30px' }}
      />
      <RiskElement
        infoText={humanDevelopmentText}
        resultText="riskTable:HCIrank"
        risk={country.hci}
        style={{ paddingLeft: '30px' }}
      />
      <RiskElement
        infoText={safetyLevelText}
        resultText="riskTable:safetyLevel"
        risk={country.safetyLevel * safetyLevelMultiplier}
        style={{ paddingLeft: '30px' }}
      />
      <RiskElement
        resultText="riskTable:sanctions"
        risk={sanctionsRisk * sanctionsMultiplier}
        infoText={sanctionsRisk === 2 ? t('riskTable:sanctionsRisk') : ''}
        style={{ paddingLeft: '30px' }}
      />
      <RiskElement
        infoText={academicFreedomText}
        risk={country.academicfreedom}
        resultText="riskTable:academicFreedom"
        style={{ paddingLeft: '30px' }}
      />
      <RiskElement
        infoText={gdprText}
        risk={gdprRisk(country, resultData)}
        resultText="GDPR"
        style={{ paddingLeft: '30px' }}
      />
    </>
  )
}

export default CountryRisks
