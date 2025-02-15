import type { Locales, Result } from '@types'

const sortResults = (results: Result[], language: keyof Locales) => {
  return results.sort((a, b) => a.data.title[language]?.localeCompare(b.data.title[language]!) ?? 0)
}

export default sortResults
