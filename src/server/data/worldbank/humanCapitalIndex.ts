import { Info, Indicator } from './types'
import { fetchData, getLatestIndicator } from './util'

type Response = [Info, Indicator[]]

const getCountryHCI = async (countryCode: string) => {
  const [info, data]: Response = await fetchData(
    `/country/${countryCode}/indicator/HD.HCI.OVRL`
  )

  const HCI = data.filter(({ value }) => value !== null)

  const { value } = getLatestIndicator(HCI)

  return value
}

export default getCountryHCI
