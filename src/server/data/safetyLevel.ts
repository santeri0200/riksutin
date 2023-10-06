import Parser from 'rss-parser'
import jsdom from 'jsdom'

const fetchSafetyLevelData = async (code: string) => {
  const { JSDOM } = jsdom

  const parser = new Parser({
    customFields: {
      item: [['content:encoded', 'encoded']],
    },
  })
  const url = `https://um.fi/o/rss?dctype=matkustustiedotteet&countrycode=${code}&lang=fi`

  try {
    const feed = await parser.parseURL(url)

    const element = feed.items
    const dom = new JSDOM(element[0].encoded)
    const safetyLevel = dom.window.document.querySelector('p')?.textContent

    return safetyLevel
  } catch (error) {
    return ''
  }
}

export default fetchSafetyLevelData
