import express from 'express'

import getCountries from '../data/worldbank/countries'
import getCountryIndicator from '../data/worldbank/indicator'
import fetchSafetyLevelData from '../data/safetyLevel'

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

  const corruption = await getCountryIndicator(code, 'CC.PER.RNK')
  const stability = await getCountryIndicator(code, 'PV.PER.RNK')
  const hci = await getCountryIndicator(code, 'HD.HCI.OVRL')
  const safetyLevel = await fetchSafetyLevelData(code)

  const country = {
    code,
    corruption,
    stability,
    hci,
    safetyLevel,
  }

  return res.status(200).send(country)
})

export default countryRouter
