export type Info = {
  page: number
  pages: number
  per_page: number
  total: number
  sourceid?: string
  lastupdated?: string
}

export type Region = {
  id: string
  iso2Code: string
  value: string
}

export type Country = {
  id: string
  iso2Code: string
  name: string
  region: Region
  adminregion: Region
  incomeLevel: Region
  lendingType: Region
  capitalCity: string
  longitude: string
  latitude: string
}

export type Value = {
  id: string
  value: string
}

export type Indicator = {
  indicator: Value
  country: Value
  countryiso3code: string
  date: string
  value?: number
  unit: string
  obs_status: string
  decimal: number
}
