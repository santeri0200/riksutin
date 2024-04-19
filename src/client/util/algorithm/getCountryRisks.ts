import { Locales, Result } from '@backend/types'
import { CountryData, FormValues } from '../../types'
import { gdprRisk } from './risks'

const getCountryRisks = (
  country: CountryData | undefined,
  results: Result[],
  resultData: FormValues,
  language: string
) => {
  if (!country || !results || !resultData) return null

  const sanctionsRiskLevel = country.sanctions ? 2 : 1
  const gdprRiskLevel = gdprRisk(country, resultData)
  const sanctionsMultiplier =
    sanctionsRiskLevel === 2 && resultData['11'].research ? 1.5 : 1

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
    (r) => r.optionLabel === `gdprRiskLevel${gdprRiskLevel}`
  )?.isSelected[language as keyof Locales]

  return [
    [country.corruption, corruptionText, 'riskTable:corruptionRank'],
    [
      country.safetyLevel * safetyLevelMultiplier,
      safetyLevelText,
      'riskTable:safetyLevel',
    ],
    [country.academicfreedom, academicFreedomText, 'riskTable:academicFreedom'],
    [country.stability, politicalStabilityText, 'riskTable:stabilityRank'],
    [country.hci, humanDevelopmentText, 'riskTable:HCIrank'],
    [gdprRiskLevel, gdprText, 'GDPR'],
    [
      sanctionsRiskLevel * sanctionsMultiplier,
      sanctionsRiskLevel === 2 ? 'riskTable:sanctionsRisk' : '',
      'riskTable:sanctions',
    ],
  ]
}

export default getCountryRisks
