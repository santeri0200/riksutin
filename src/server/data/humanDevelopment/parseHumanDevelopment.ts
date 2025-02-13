import fs from 'node:fs'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse } from 'csv-parse/sync'

const parseHumanDevelopment = (name: string | undefined) => {
  if (!name) return null

  const filePath = path.resolve(
    dirname(fileURLToPath(import.meta.url)),
    'humanDevelopment.csv'
  )
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const records: any[] = parse(fileContents, { delimiter: ',' })

  const countryRecord = records.find((record: string[]) =>
    record[0].toUpperCase().includes(name.toUpperCase())
  )

  if (!countryRecord) return null

  const level1 = 64
  const level2 = 128

  const recordIndex = records.indexOf(countryRecord)

  if (recordIndex <= level1) {
    return 1
  }
  if (recordIndex <= level2) {
    return 2
  }
  return 3
}

export default parseHumanDevelopment
