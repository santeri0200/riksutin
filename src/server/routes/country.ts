import express from 'express'

import getCountries from '../data/worldbank/countries'
import getCountryIndicator from '../data/worldbank/indicator'
import fetchSafetyLevelData from '../data/safetyLevel'
import getCountryUniversities from '../data/whed/countryUniversities'
import fetchSanctionsData from '../data/sanctions/sanctionsMap'
import parseAcademicFreedom from '../data/academicfreedom/parseAcademicFreedom'

const countryRouter = express.Router()

countryRouter.get('/', async (_, res) => {
  const data = await getCountries()

  const countries = data.map(({ name, iso2Code }) => ({
    name,
    code: iso2Code,
  }))

  return res.status(200).send(countries)
})

countryRouter.get('/:code', async (req, res: any) => {
  const { code } = req.params
  const countries = await getCountries()

  const countryName = countries.find(
    (country) => country.iso2Code === code.toUpperCase()
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

  return res.status(200).send(country)
})

export default countryRouter
