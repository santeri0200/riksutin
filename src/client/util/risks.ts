import { CountryData } from '@frontend/types'

export const countryRisk = (country: CountryData | undefined) => {
  if (!country) return null

  const { code, universities, safetyLevel, ...riskValues } = country

  const safetyLevels = [
    ['Noudata tavanomaista varovaisuutta', 1],
    ['Noudata erityistä varovaisuutta', 2],
    ['Vältä tarpeetonta matkustamista', 2],
    ['Vältä kaikkea matkustamista', 3],
    ['Poistu välittömästi maasta', 3],
  ]

  const safetyLevelRisk =
    safetyLevels.find((level) => level[0] === safetyLevel)?.[1] || null

  const filteredRiskValues = Object.values(riskValues)
    .concat(safetyLevelRisk as number)
    .filter((value) => value != null && typeof value === 'number')

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
