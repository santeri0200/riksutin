import jsdom from 'jsdom'

import logger from '../../util/logger'

import { set, get } from '../../util/redis'

const baseUrl = 'https://whed.net'

const fetchData = async (countryName: string) => {
  if (countryName === 'United States') countryName = 'United States of America'

  const url = `${baseUrl}/results_institutions.php`
  const key = `${url}?country=${countryName}`

  const cached: string | null = await get(key)
  if (cached) return cached

  const formdata = new FormData()

  formdata.append('Chp1', countryName)
  formdata.append('nbr_ref_pge', '10000')

  const response = await fetch(url, {
    method: 'POST',
    body: formdata,
  })

  const html = await response.text()

  await set(key, html)

  return html
}

const parseHTML = (html: string): string[] => {
  const { JSDOM } = jsdom
  const dom = new JSDOM(html)

  const filterList = ['Sort by:', 'Results per page:']
  const universities = dom.window.document.querySelectorAll('h3')

  const universityNames = [...universities]
    .map(university => university?.textContent?.trim())
    .filter(name => !!name) as string[]

  const filteredUniversityNames = universityNames.filter(name => !filterList.includes(name))

  return filteredUniversityNames
}

const getCountryUniversities = async (countryName: string | undefined) => {
  if (!countryName) return null

  try {
    const html = await fetchData(countryName)
    const universityNames = parseHTML(html)

    return universityNames
  } catch (error) {
    logger.error(error)
    return []
  }
}

export default getCountryUniversities
