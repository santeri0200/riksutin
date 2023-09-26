import { Indicator } from './types'
import { set, get } from '../../util/redis'

const baseUrl = 'https://api.worldbank.org/v2'

const params = 'per_page=1000&format=json'

export const fetchData = async (path: string) => {
  const url = `${baseUrl}/${path}?${params}`

  const cached = await get(url)
  if (cached) return cached

  const response = await fetch(url)
  const data = await response.json()

  await set(url, data)

  return data
}

export const getLatestIndicator = (indicators: Indicator[]) => {
  indicators.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return indicators[0]
}
