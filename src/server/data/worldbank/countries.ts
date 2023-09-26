import { Info, Country } from './types'

const baseUrl = 'http://api.worldbank.org/v2/country'

type Response = [Info, Country[]]

const getCountries = async () => {
  const response = await fetch(`${baseUrl}?per_page=1000&format=json`)
  const [info, data]: Response = await response.json()

  const countries = data.filter(({ region }) => region.value !== 'Aggregates')

  return countries
}

export default getCountries
