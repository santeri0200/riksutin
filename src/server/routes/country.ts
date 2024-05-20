import express from 'express'

import { fetchData } from '@backend/data/worldbank/util'
import getCountryIndicator from '../data/worldbank/indicator'
import fetchSafetyLevelData from '../data/safetyLevel'
import getCountryUniversities from '../data/whed/countryUniversities'
import fetchSanctionsData from '../data/sanctions/sanctionsMap'
import parseAcademicFreedom from '../data/academicfreedom/parseAcademicFreedom'
import { CountryData } from '../types'
import { Info, Country } from '../data/worldbank/types'

type Response = [Info, Country[]]

export const getCountries = async () => {
  const [info, data]: Response = await fetchData(`countries`)

  const filtered = data.filter(({ region }) => region.value !== 'Aggregates')

  const countries = filtered.map(({ name, iso2Code }) => ({
    name,
    code: iso2Code,
  }))

  return countries
}

export const getCountryData = async (code: string | undefined) => {
  if (!code) return null
  const countries = await getCountries()

  const countryName = countries.find(
    (country) => country.code === code.toUpperCase()
  )?.name

  const corruption = await getCountryIndicator(code, 'CC.PER.RNK')
  const stability = await getCountryIndicator(code, 'PV.PER.RNK')
  const hci = await getCountryIndicator(code, 'HD.HCI.OVRL')
  const safetyLevel = await fetchSafetyLevelData(code)
  const universities = await getCountryUniversities(countryName)
  const sanctions = await fetchSanctionsData(code)
  const academicfreedom = parseAcademicFreedom(code)

  const country = {
    code,
    corruption,
    stability,
    hci,
    safetyLevel,
    universities,
    sanctions,
    academicfreedom,
  }

  return country as CountryData
}

const countryRouter = express.Router()

countryRouter.get('/', async (_, res) => {
  const countries = await getCountries()

  return res.status(200).send(countries)
})

countryRouter.get('/:code', async (req, res: any) => {
  const country = await getCountryData(req.params.code)

  return res.status(200).send(country)
})

export default countryRouter
