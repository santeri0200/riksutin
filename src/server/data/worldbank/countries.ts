import { Info, Country } from './types'
import { fetchData } from './util'

type Response = [Info, Country[]]

const getCountries = async () => {
  const [info, data]: Response = await fetchData(`/countries`)

  const countries = data.filter(({ region }) => region.value !== 'Aggregates')

  return countries
}

export default getCountries
