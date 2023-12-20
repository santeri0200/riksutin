import fs from 'fs'
import { parse } from 'csv-parse/sync'
import { riskLevelCheck } from '../worldbank/util'

const parseAcademicFreedom = (countryName: string | undefined) => {
  if (!countryName) return null

  const filePath = './src/server/data/academicfreedom/academicfreedom.csv'
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const records = parse(fileContents, { delimiter: ',' })

  const countryRecord = records.find(
    (record: string[]) => record[0] === countryName
  )

  if (!countryRecord) return null

  const riskLevel = riskLevelCheck(-5, 5, parseFloat(countryRecord[2]))

  return riskLevel
}

export default parseAcademicFreedom
