import { Info, Indicator } from './types'
import { fetchData, getLatestIndicator } from './util'

type Response = [Info, Indicator[]]

const getCountryPoliticalStability = async (countryCode: string) => {
  const [info, data]: Response = await fetchData(
    `/country/${countryCode}/indicator/PV.PER.RNK`
  )

  const stability = data.filter(({ value }) => value !== null)

  const { value } = getLatestIndicator(stability)

  return value
}

export default getCountryPoliticalStability
