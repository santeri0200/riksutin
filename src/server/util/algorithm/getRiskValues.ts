import { Locales, Question, Result } from '@backend/types'
import {
  Country,
  CountryData,
  FormValues,
  Risk,
  RiskData,
} from '@frontend/types'

import totalRisk from './totalRisk'
import { gdprRisk } from './risks'
import { getCountries, getCountryData } from '../../routes/country'

const getRiskValues = async (
  formdata: FormValues,
  questions: Question[],
  results: Result[],
  language: string
) => {
  const countries: Country[] = await getCountries()

  const selectedCountry: any = formdata['8']
  const selectedCountryCode = countries?.find(
    (country) => country.name === selectedCountry
  )?.code

  const countryData: CountryData | null = await getCountryData(
    selectedCountryCode
  )

  if (!countryData) return null

  const sanctionsRiskLevel = countryData.sanctions ? 2 : 1
  const gdprRiskLevel = gdprRisk(countryData, formdata)
  const sanctionsMultiplier =
    sanctionsRiskLevel === 2 && formdata['11'].research ? 1.5 : 1

  const safetyLevelMultiplier =
    (countryData.safetyLevel === 2 || countryData.safetyLevel === 3) &&
    (formdata['11'].studentMobility || formdata['11'].staffMobility)
      ? 1.5
      : 1

  const updatedCountryData = {
    ...countryData,
    sanctions: sanctionsRiskLevel * sanctionsMultiplier,
    safetyLevel: safetyLevelMultiplier * countryData.safetyLevel,
    gdpr: gdprRiskLevel,
  }

  const { totalRiskLevel, filteredArray } = totalRisk(
    countryData,
    questions,
    results,
    formdata,
    language
  )

  const totalRiskText = results.find(
    (r) => r.optionLabel === `totalRiskLevel${totalRiskLevel}`
  )?.isSelected[language as keyof Locales]

  const totalRiskObject: Risk = {
    id: 'total',
    title: 'riskTable:totalRiskLevel',
    level: totalRiskLevel,
    infoText: totalRiskText,
  }

  const riskData: RiskData = {
    answers: formdata,
    risks: filteredArray.concat(totalRiskObject),
    country: new Array(updatedCountryData),
  }

  return riskData
}

export default getRiskValues
