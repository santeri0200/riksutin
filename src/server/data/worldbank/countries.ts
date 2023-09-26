import { Info, Country } from './types'
import { baseUrl, params } from './util'

type Response = [Info, Country[]]

const getCountries = async () => {
  const response = await fetch(`${baseUrl}/country?${params}`)
  const [info, data]: Response = await response.json()

  const countries = data.filter(({ region }) => region.value !== 'Aggregates')

  return countries
}

export default getCountries
