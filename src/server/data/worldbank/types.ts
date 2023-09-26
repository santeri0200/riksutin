export type Info = {
  page: number
  pages: number
  per_page: string
  total: number
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
