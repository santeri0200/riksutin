const fetchSanctionsData = async (code: string | undefined) => {
  if (!code) return null

  const url = 'https://sanctionsmap.eu/api/v1/regime'
  const res = await fetch(url)
  const data = await res.json()

  const countrySanctions = data.data.find(
    (c: any) => c.country.data.code === code
  )?.has_lists

  if (!countrySanctions) return null

  return countrySanctions
}

export default fetchSanctionsData
