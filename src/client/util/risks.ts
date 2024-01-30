import { CountryData, FormValues } from '@frontend/types'
import { Question } from '@backend/types'
import {
  euCountries,
  eeaCountries,
  adequateProtectionCountries,
} from './countryLists'

export const gdprRisk = (
  country: CountryData | undefined,
  resultData: FormValues
) => {
  if (resultData['17'] === 'noTransferPersonalData') return 1
  if (!country) return null
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

  const gdprRiskValue = gdprRisk(country, resultData)
  const riskList = Object.values(riskValues)
    .concat(
      safetyLevel * safetyLevelMultiplier,
      sanctionsRisk * sanctionsMultiplier,
      gdprRiskValue as number
    )
    .filter((value) => value != null)

  const totalCountryRiskLevel = Math.round(
    riskList.reduce((a, b) => a + b, 0) / riskList.length
  )

  return [totalCountryRiskLevel, riskList]
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

export const dualUseRisk = (questions: Question[], resultData: FormValues) => {
  if (euCountries.includes(resultData[8])) return 1
  return questions
    .find((question) => question.id === 23)
    ?.optionData.options.find((o) => o.id === resultData[23])?.risk
}

export const organisationRisk = (resultData: FormValues) => {
  if (!resultData[22] && !resultData.selectOrganisation) return null
  if (resultData.selectOrganisation) return 1
  if (
    !resultData.selectOrganisation &&
    resultData[24] === 'succefultCollaboration'
  )
    return 2
  if (
    !resultData.selectOrganisation &&
    resultData[24] === 'noSuccessfulCollaboration'
  )
    return 3
  return null
}
