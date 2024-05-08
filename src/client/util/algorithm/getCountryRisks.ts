import { Locales, Result } from '@backend/types'
import { CountryData, FormValues, Risk } from '../../types'

const getCountryRisks = (
  country: CountryData | undefined,
  results: Result[],
  resultData: FormValues,
  language: string
) => {
  if (!country || !results || !resultData) return null

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
    (r) => r.optionLabel === `gdprRiskLevel${country.gdpr}`
  )?.isSelected[language as keyof Locales]
  const sanctionsText = results.find(
    (r) => r.optionLabel === `sanctionsRiskLevel${country.sanctions}`
  )?.isSelected[language as keyof Locales]

  const countryRisks: Risk[] = [
    {
      id: 'corruption',
      title: 'riskTable:corruptionRank',
      level: country.corruption,
      infoText: corruptionText,
    },
    {
      id: 'safetyLevel',
      title: 'riskTable:safetyLevel',
      level: country.safetyLevel,
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
      level: country.gdpr,
      infoText: gdprText,
    },
    {
      id: 'sanctions',
      title: 'riskTable:sanctions',
      level: country.sanctions,
      infoText: sanctionsText,
    },
  ]

  return countryRisks
}

export default getCountryRisks
