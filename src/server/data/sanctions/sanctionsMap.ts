const fetchSanctionsData = async (countryName: string | undefined) => {
  if (!countryName) return null

  const url = 'https://sanctionsmap.eu/api/v1/regime'
  const res = await fetch(url)
  const data = await res.json()

  const countrySanctions = data.data.find(
    (c: any) => c.country.data.title === countryName
  ).legal_acts

  if (!countrySanctions) return null

  return countrySanctions
}

export default fetchSanctionsData
