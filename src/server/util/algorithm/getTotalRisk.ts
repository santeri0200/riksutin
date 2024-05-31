import { FormValues } from '@frontend/types'
import { Question, UpdatedCountryData, Risk } from '@backend/types'
import {
  totalCountryRisk,
  dualUseRisk,
  organisationRisk,
  universityRisk,
} from './individualRisks'

const consortiumRisk = (
  highRisk: string,
  selectedCountries: string[] | undefined
) => {
  if (highRisk === 'noHighRiskCountries') {
    return 1
  }
  if (selectedCountries && selectedCountries.length >= 2) {
    return 3
  }
  return 2
}

const getTotalRisk = (
  country: UpdatedCountryData | undefined,
  questions: Question[],
  resultData: FormValues
) => {
  const countryRiskValues = totalCountryRisk(country, resultData)

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

  const riskArray: Risk[] = [
    {
      id: 'country',
      title: 'riskTable:countryRiskLevel',
      level: countryRiskValues ? countryRiskValues[0] : null,
    },
    {
      id: 'university',
      title: 'riskTable:universityRiskLevel',
      level: universityRisk(resultData['20'], resultData['21']),
    },
    {
      id: 'duration',
      title: 'riskTable:durationRiskLevel',
      level: questions
        .find((question) => question.id === 12)
        ?.optionData.options.find((o) => o.id === resultData[12])?.risk,
    },
    {
      id: 'dualUse',
      title: 'riskTable:dualUseRiskLevel',
      level: dualUseRiskValue,
    },
    {
      id: 'organisation',
      title: 'riskTable:organisationRiskLevel',
      level: organisationRiskValue,
    },
    {
      id: 'economic',
      title: 'riskTable:economicRiskLevel',
      level: questions
        .find((question) => question.id === 16)
        ?.optionData.options.find((o) => o.id === resultData[16])?.risk,
    },
    {
      id: 'ethical',
      title: 'riskTable:ethicalRiskLevel',
      level: ethicalRiskValue,
    },
  ]

  const filteredArray = riskArray.filter(
    (value) => value.level !== (null || undefined)
  )

  const allRisks = (riskArray.map((value) => value.level) as number[])
    .concat(countryRiskValues ? countryRiskValues[1] : [])
    .filter((value) => value)

  let totalRiskLevel = Math.round(
    (allRisks.reduce((a, b) => a + b, 0) / allRisks.length) *
      roleMultiplier *
      durationMultiplier *
      agreementMultiplier *
      previousCollaborationMultiplier
  )

  if (allRisks.filter((value) => value === 3).length >= 3) totalRiskLevel = 3

  if (resultData[26]) {
    const consortium: Risk = {
      id: 'consortium',
      title: 'riskTable:consortiumRiskLevel',
      level: consortiumRisk(resultData[26], resultData[27]),
    }
    filteredArray.push(consortium)
  }

  return { totalRiskLevel, filteredArray }
}

export default getTotalRisk
