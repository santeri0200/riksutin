import { Indicator } from './types'

export const baseUrl = 'http://api.worldbank.org/v2'

export const params = 'per_page=1000&format=json'

export const getLatestIndicator = (indicators: Indicator[]) => {
  indicators.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return indicators[0]
}
