import { Info, Indicator } from './types'

type Response = [Info, Indicator[]]

const baseUrl = 'http://api.worldbank.org/v2/country'

const getLatest = (indicators: Indicator[]) => {
  indicators.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return indicators[0]
}

const getCountryCorruption = async (countryCode: string) => {
  const response = await fetch(
    `${baseUrl}/${countryCode}/indicator/CC.EST?per_page=1000&format=json`
  )
  const [info, data]: Response = await response.json()

  const corruption = data.filter(({ value }) => value !== null)

  const { value } = getLatest(corruption)

  return value
}

export default getCountryCorruption
