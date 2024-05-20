import { Question, CountryData, RiskData } from '@backend/types'
import { Country, FormValues, Risk } from '@frontend/types'

import { getQuestions } from '../../services/question'
import { getCountries, getCountryData } from '../../routes/country'
import getTotalRisk from './getTotalRisk'
import getCountryRisks from './getCountryRisks'

const createRiskData = async (formData: FormValues) => {
  const countries: Country[] = await getCountries()
  const questions: Question[] = await getQuestions('1')

  const selectedCountry: any = formData['8']
  const selectedCountryCode = countries?.find(
    (country) => country.name === selectedCountry
  )?.code

  const countryData: CountryData | null = await getCountryData(
    selectedCountryCode
  )

  if (!countryData) return null

  const updatedCountryData = getCountryRisks(countryData, formData)

  const { totalRiskLevel, filteredArray } = getTotalRisk(
    countryData,
    questions,
    formData
  )

  const totalRiskObject: Risk = {
    id: 'total',
    title: 'riskTable:totalRiskLevel',
    level: totalRiskLevel,
  }

  const riskData: RiskData = {
    answers: formData,
    risks: filteredArray.concat(totalRiskObject),
    country: new Array(updatedCountryData),
  }

  return riskData
}

export default createRiskData
