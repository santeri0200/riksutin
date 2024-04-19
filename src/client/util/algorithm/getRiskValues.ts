import { Question, Result } from '@backend/types'
import { Country, CountryData, FormValues } from '../../types'
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

  return {}
}

export default getRiskValues
