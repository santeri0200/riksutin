import { CountryData } from '@frontend/types'

export const countryRisk = (country: CountryData | undefined) => {
  if (!country) return null

  const { code, universities, ...riskValues } = country

  const filteredRiskValues = Object.values(riskValues).filter(
    (value) => value != null && typeof value === 'number'
  )
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
    return 4
  }
  if (university) {
    return 1
  }

  return null
}

export const durationRisk = (
  duration: string | undefined,
  levels: number[][]
) => {
  if (!duration) return null

  const durationNumber = Number(duration)
  const riskLevel = levels.find((level) => durationNumber > level[0])

  if (!riskLevel) return null

  return riskLevel[1]
}
