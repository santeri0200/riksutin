import { Question, Result } from '@backend/types'
import { Country, CountryData, FormValues } from '../../types'
import apiClient from '../apiClient'

import totalRisk from './totalRisk'

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

  const country: CountryData = (
    await apiClient.get(`/countries/${selectedCountryCode}`)
  ).data

  const { totalRiskLevel, filteredArray } = totalRisk(
    country,
    questions,
    results,
    formdata,
    language
  )

  return formdata
}

export default getRiskValues
