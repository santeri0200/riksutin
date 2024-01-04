import React from 'react'

import { useTranslation } from 'react-i18next'

import { Locales, Result } from '@backend/types'

import { CountryData, FormValues } from '../../types'
import RiskElement from './RiskElement'

const CountryResults = ({
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

  const sanctionsRisk = country.sanctions ? 2 : 1
  const sanctionsMultiplier =
    sanctionsRisk === 2 && resultData['11'].research ? 1.5 : 1

  return (
    <>
      <RiskElement
        infoText={corruptionText}
        resultText={t('results:corruptionRank')}
        risk={country.corruption}
        style={{ paddingLeft: '30px' }}
      />
      <RiskElement
        infoText={politicalStabilityText}
        resultText={t('results:stabilityRank')}
        risk={country.stability}
        style={{ paddingLeft: '30px' }}
      />
      <RiskElement
        infoText={humanDevelopmentText}
        resultText={t('results:HCIrank')}
        risk={country.hci}
        style={{ paddingLeft: '30px' }}
      />
      <RiskElement
        infoText={safetyLevelText}
        resultText={t('results:safetyLevel')}
        risk={country.safetyLevel}
        style={{ paddingLeft: '30px' }}
      />
      <RiskElement
        resultText={t('results:sanctions')}
        risk={sanctionsRisk * sanctionsMultiplier}
        infoText={sanctionsRisk === 2 ? t('risks:sanctionsRisk') : ''}
        style={{ paddingLeft: '30px' }}
      />
      <RiskElement
        infoText={academicFreedomText}
        risk={country.academicfreedom}
        resultText={t('results:academicFreedom')}
        style={{ paddingLeft: '30px' }}
      />
    </>
  )
}

export default CountryResults
