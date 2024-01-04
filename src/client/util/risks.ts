import { CountryData, FormValues } from '@frontend/types'

export const countryRisk = ({
  country,
  resultData,
}: {
  country: CountryData | undefined
  resultData: FormValues
}) => {
  if (!country) return null

  const { code, universities, safetyLevel, sanctions, ...riskValues } = country

  const safetyLevels = [
    ['Noudata tavanomaista varovaisuutta', 1],
    ['Noudata erityistä varovaisuutta', 2],
    ['Vältä tarpeetonta matkustamista', 2],
    ['Vältä kaikkea matkustamista', 3],
    ['Poistu välittömästi maasta', 3],
  ]

  const sanctionsRisk = sanctions ? 2 : 1
  const sanctionsMultiplier =
    sanctionsRisk === 2 && resultData['11'].research ? 1.5 : 1

  const safetyLevelRisk =
    safetyLevels.find((level) => level[0] === safetyLevel)?.[1] || null

  const filteredRiskValues = Object.values(riskValues)
    .concat(safetyLevelRisk as number, sanctionsRisk * sanctionsMultiplier)
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
