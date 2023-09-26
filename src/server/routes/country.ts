import express from 'express'

import getCountries from '../data/worldbank/countries'
import getCountryCorruption from '../data/worldbank/corruption'

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

  const corruption = await getCountryCorruption(code)

  const country = {
    code,
    corruption,
  }

  return res.status(200).send(country)
})

export default countryRouter