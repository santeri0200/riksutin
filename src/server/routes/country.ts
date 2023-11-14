import express from 'express'

import getCountries from '../data/worldbank/countries'
import getCountryIndicator from '../data/worldbank/indicator'
import fetchSafetyLevelData from '../data/safetyLevel'
import getCountryUniversities from '../data/whed/countryUniversities'

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

  console.time('Corruption')
  const corruption = await getCountryIndicator(code, 'CC.PER.RNK')
  console.timeEnd('Corruption')

  console.time('Stability')
  const stability = await getCountryIndicator(code, 'PV.PER.RNK')
  console.timeEnd('Stability')

  console.time('HCI')
  const hci = await getCountryIndicator(code, 'HD.HCI.OVRL')
  console.timeEnd('HCI')

  console.time('Safety Level')
  const safetyLevel = await fetchSafetyLevelData(code)
  console.timeEnd('Safety Level')

  console.time('Universities')
  const universities = await getCountryUniversities(countryName)
  console.timeEnd('Universities')

  const country = {
    code,
    corruption,
    stability,
    hci,
    safetyLevel,
    universities,
  }

  return res.status(200).send(country)
})

export default countryRouter
