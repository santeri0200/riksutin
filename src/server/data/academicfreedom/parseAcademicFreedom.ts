import fs from 'node:fs'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse } from 'csv-parse/sync'
import { riskLevelCheck } from '../worldbank/util'

const parseAcademicFreedom = (code: string | undefined) => {
  if (!code) return null

  const filePath = path.resolve(
    dirname(fileURLToPath(import.meta.url)),
    'academicfreedom.csv'
  )
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const records = parse(fileContents, { delimiter: ',' })

  const countryRecord = records.find(
    (record: string[]) => record[1] === code.toUpperCase()
  )

  if (!countryRecord) return null

  const riskLevel = riskLevelCheck(-5, 5, parseFloat(countryRecord[2]))

  return riskLevel
}

export default parseAcademicFreedom
