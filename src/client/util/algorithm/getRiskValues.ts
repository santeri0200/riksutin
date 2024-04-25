import { Locales, Question, Result } from '@backend/types'
import { Country, CountryData, FormValues, Risk, RiskData } from '../../types'
import apiClient from '../apiClient'

import totalRisk from './totalRisk'
import getCountryRisks from './getCountryRisks'

const getRiskValues = async (
  formdata: FormValues,
  questions: Question[],
  results: Result[],
  language: string
) => {
  const countries: Country[] = (await apiClient.get('/countries')).data

  const selectedCountry: any = formdata['8']
  const selectedCountryCode = countries?.find(
    (country) => country.name === selectedCountry
  )?.code

  const countryData: CountryData = (
    await apiClient.get(`/countries/${selectedCountryCode}`)
  ).data

  const countryRisks = getCountryRisks(countryData, results, formdata, language)

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
    country: countryRisks,
  }

  return riskData
}

export default getRiskValues
