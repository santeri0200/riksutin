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
  const sanctionsText = results.find(
    (r) => r.optionLabel === `sanctionsRiskLevel${sanctionsRiskLevel}`
  )?.isSelected[language as keyof Locales]

  const countryRisks = [
    {
      id: 'corruption',
      title: 'riskTable:corruptionRank',
      level: country.corruption,
      infoText: corruptionText,
    },
    {
      id: 'safetyLevel',
      title: 'riskTable:safetyLevel',
      level: country.safetyLevel * safetyLevelMultiplier,
      infoText: safetyLevelText,
    },
    {
      id: 'academicFreedom',
      title: 'riskTable:academicFreedom',
      level: country.academicfreedom,
      infoText: academicFreedomText,
    },
    {
      id: 'politicalStability',
      title: 'riskTable:stabilityRank',
      level: country.stability,
      infoText: politicalStabilityText,
    },
    {
      id: 'HCI',
      title: 'riskTable:HCIrank',
      level: country.hci,
      infoText: humanDevelopmentText,
    },
    {
      id: 'GDPR',
      title: 'GDPR',
      level: gdprRiskLevel,
      infoText: gdprText,
    },
    {
      id: 'sanctions',
      title: 'riskTable:sanctions',
      level: sanctionsRiskLevel * sanctionsMultiplier,
      infoText: sanctionsText,
    },
  ]

  return countryRisks
}

export default getCountryRisks
