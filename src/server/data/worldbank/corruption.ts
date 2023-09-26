import { Info, Indicator } from './types'
import { fetchData, getLatestIndicator } from './util'

type Response = [Info, Indicator[]]

const getCountryCorruption = async (countryCode: string) => {
  const [info, data]: Response = await fetchData(
    `/country/${countryCode}/indicator/CC.EST`
  )

  const corruption = data.filter(({ value }) => value !== null)

  const { value } = getLatestIndicator(corruption)

  return value
}

export default getCountryCorruption
