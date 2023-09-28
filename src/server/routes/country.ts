import express from 'express'

import getCountries from '../data/worldbank/countries'
import getCountryIndicator from '../data/worldbank/indicator'

const countryRouter = express.Router()

countryRouter.get('/', async (_, res) => {
  const data = await getCountries()

  const countries = data.map(({ name, iso2Code }) => ({
    name,
    code: iso2Code,
  }))

  return res.status(200).send(countries)
})

countryRouter.get('/:code/corruption', async (req, res: any) => {
  const { code } = req.params

  const corruption = await getCountryIndicator(code, 'CC.EST')

  const country = {
    code,
    corruption,
  }

  return res.status(200).send(country)
})

countryRouter.get('/:code/stability', async (req, res: any) => {
  const { code } = req.params

  const stability = await getCountryIndicator(code, 'PV.PER.RNK')

  const country = {
    code,
    stability,
  }

  return res.status(200).send(country)
})

countryRouter.get('/:code/hci', async (req, res: any) => {
  const { code } = req.params

  const hci = await getCountryIndicator(code, 'HD.HCI.OVRL')

  const country = {
    code,
    hci,
  }

  return res.status(200).send(country)
})
export default countryRouter
