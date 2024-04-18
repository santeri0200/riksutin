import { CountryData, FormValues } from '@frontend/types'
import { Question, Result, Locales } from '@backend/types'
import {
  countryRisk,
  dualUseRisk,
  organisationRisk,
  universityRisk,
} from './risks'

const totalRisk = (
  country: CountryData | undefined,
  questions: Question[],
  results: Result[],
  resultData: FormValues,
  language: string
): {
  totalRiskLevel: number
  filteredArray: {
    id: string
    text: string
    riskLevel: any
    infoText?: string
  }[]
} => {
  const possibleRiskLevels = [0, 1, 2, 3, 4, 5]

  const countryRiskValues = countryRisk({ country, resultData })

  const roleMultiplier = resultData[9] === 'coordinator' ? 1.2 : 1
  const durationMultiplier = resultData[12] === 'longDuration' ? 1.2 : 1
  const agreementMultiplier = resultData[10] === 'agreementNotDone' ? 1.2 : 1
  const previousCollaborationMultiplier =
    resultData[24] === 'noSuccessfulCollaboration' ? 1.2 : 1

  const dualUseRiskValue = dualUseRisk(questions, resultData, country)

  const organisationRiskValue = organisationRisk(resultData)

  const ethicalRiskValue = questions
    .find((question) => question.id === 25)
    ?.optionData.options.find((o: { id: any }) => o.id === resultData[25])?.risk

  const riskArray = [
    {
      id: 'country',
      text: 'riskTable:countryRiskLevel',
      riskLevel: countryRiskValues ? countryRiskValues[0] : null,
    },
    {
      id: 'university',
      text: 'riskTable:universityRiskLevel',
      riskLevel: universityRisk(resultData['20'], resultData['21']),
      infoText: results.find(
        (r) =>
          r.optionLabel ===
          `universityRiskLevel${universityRisk(
            resultData['20'],
            resultData['21']
          )}`
      )?.isSelected[language as keyof Locales],
    },
    {
      id: 'duration',
      text: 'riskTable:durationRiskLevel',
      riskLevel: questions
        .find((question) => question.id === 12)
        ?.optionData.options.find((o) => o.id === resultData[12])?.risk,
    },
    {
      id: 'dualUse',
      text: 'riskTable:dualUseRiskLevel',
      riskLevel: dualUseRiskValue,
      infoText: results.find(
        (r) => r.optionLabel === `dualUseRiskLevel${dualUseRiskValue}`
      )?.isSelected[language as keyof Locales],
    },
    {
      id: 'organisation',
      text: 'riskTable:organisationRiskLevel',
      riskLevel: organisationRiskValue,
      infoText: results.find(
        (r) => r.optionLabel === `organisationRiskLevel${organisationRiskValue}`
      )?.isSelected[language as keyof Locales],
    },
    {
      id: 'economic',
      text: 'riskTable:economicRiskLevel',
      riskLevel: questions
        .find((question) => question.id === 16)
        ?.optionData.options.find((o) => o.id === resultData[16])?.risk,
    },
    {
      id: 'ethical',
      text: 'riskTable:ethicalRiskLevel',
      riskLevel: ethicalRiskValue,
      infoText: results.find(
        (r) => r.optionLabel === `ethicalRiskLevel${ethicalRiskValue}`
      )?.isSelected[language as keyof Locales],
    },
  ]

  const filteredArray = riskArray.filter((value) =>
    possibleRiskLevels.includes(value.riskLevel)
  )

  const allRisks = (
    riskArray.map((value) => value.riskLevel) as number[]
  ).concat(countryRiskValues ? countryRiskValues[1] : [])

  let totalRiskLevel = Math.round(
    (allRisks.reduce((a, b) => a + b, 0) / allRisks.length) *
      roleMultiplier *
      durationMultiplier *
      agreementMultiplier *
      previousCollaborationMultiplier
  )

  if (allRisks.filter((value) => value === 3).length >= 3) totalRiskLevel = 3

  return { totalRiskLevel, filteredArray }
}

export default totalRisk
