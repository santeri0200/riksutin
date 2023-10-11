import { Info, Indicator } from './types'
import { fetchData, getLatestIndicator } from './util'

type Response = [Info, Indicator[]]

const getCountryIndicator = async (
  countryCode: string,
  indicatorCode: string
) => {
  const [info, data]: Response = await fetchData(
    `country/${countryCode}/indicator/${indicatorCode}`
  )

  const indicatorData = data.filter(({ value }) => value !== null)

  if (indicatorData.length === 0) {
    return null
  }

  const { value } = getLatestIndicator(indicatorData)

  return value
}

export default getCountryIndicator
