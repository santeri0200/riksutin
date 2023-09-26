import { Info, Indicator } from './types'
import { baseUrl, params, getLatestIndicator } from './util'

type Response = [Info, Indicator[]]

const getCountryCorruption = async (countryCode: string) => {
  const response = await fetch(
    `${baseUrl}/country/${countryCode}/indicator/CC.EST?${params}`
  )
  const [info, data]: Response = await response.json()

  const corruption = data.filter(({ value }) => value !== null)

  const { value } = getLatestIndicator(corruption)

  return value
}

export default getCountryCorruption
