import { CountryData, FormValues } from '@frontend/types'
import { eeaCountries, adequateProtectionCountries } from './countryLists'

export const countryRisk = ({
  country,
  resultData,
}: {
  country: CountryData | undefined
  resultData: FormValues
}) => {
  if (!country) return null

  const { code, universities, safetyLevel, sanctions, ...riskValues } = country

  const sanctionsRisk = sanctions ? 2 : 1
  const sanctionsMultiplier =
    sanctionsRisk === 2 && resultData['11'].research ? 1.5 : 1

  const safetyLevelMultiplier =
    (safetyLevel === 2 || safetyLevel === 3) &&
    (resultData['11'].studentMobility || resultData['11'].staffMobility)
      ? 1.5
      : 1

  const gdprRisk = () => {
    if (resultData['17'] === 'noTransferPersonalData') return 1
    if (
      resultData['17'] === 'transferPersonalData' &&
      eeaCountries.includes(country.code)
    )
      return 1
    if (
      resultData['17'] === 'transferPersonalData' &&
      !eeaCountries.includes(country.code) &&
      adequateProtectionCountries.includes(country.code)
    )
      return 2
    if (
      resultData['17'] === 'transferPersonalData' &&
      !eeaCountries.includes(country.code) &&
      !adequateProtectionCountries.includes(country.code)
    )
      return 3
    return null
  }

  const filteredRiskValues = Object.values(riskValues)
    .concat(
      safetyLevel * safetyLevelMultiplier,
      sanctionsRisk * sanctionsMultiplier,
      gdprRisk() as number
    )
    .filter((value) => value != null)

  const totalCountryRiskLevel = Math.round(
    filteredRiskValues.reduce((a, b) => a + b, 0) / filteredRiskValues.length
  )

  return totalCountryRiskLevel
}

export const universityRisk = (
  university: string | undefined,
  other: string | undefined
) => {
  if (other) {
    return 3
  }
  if (university) {
    return 1
  }

  return null
}
