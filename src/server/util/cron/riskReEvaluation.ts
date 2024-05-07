import getCountries from '@backend/data/worldbank/countries'
import { getCountryData } from '../../routes/country'
import { Entry } from '../../db/models'
import logger from '../logger'
import scheduleCronJob from './schedule'

const run = async () => {
  logger.info('testing cron job')
  const entry = await Entry.findOne({ where: { id: 210 } })
  const answers = entry?.data.answers
  const countries = await getCountries()

  if (!countries || !answers || !entry) return null
  const countryName = answers['8']

  const selectedCountryCode = countries?.find(
    (country) => country.name === (countryName as unknown as string)
  )?.iso2Code
  const countryData = await getCountryData(selectedCountryCode)

  if (!countryData) return null

  const sanctionsRiskLevel = countryData.sanctions ? 2 : 1

  const sanctionsMultiplier =
    sanctionsRiskLevel === 2 && answers['11'].research ? 1.5 : 1

  const safetyLevelMultiplier =
    (countryData.safetyLevel === 2 || countryData.safetyLevel === 3) &&
    (answers['11'].studentMobility || answers['11'].staffMobility)
      ? 1.5
      : 1

  const updatedData = {
    sanctions: sanctionsRiskLevel * sanctionsMultiplier,
    safetyLevel: safetyLevelMultiplier * countryData.safetyLevel,
    gdpr: entry.data.country?.find((risk) => risk.id === 'GDPR')?.level,
  }

  const updatedCountryData = { ...countryData, ...updatedData }

  logger.info(
    Object.values(updatedCountryData)
      .filter((risk) => typeof risk === 'number')
      .sort()
  )
  logger.info(entry.data.country?.map((c) => c.level).sort())

  return null
}

const startRiskCron = async () => {
  const cronTime = '*/2 * * * *'
  logger.info('cron job activated')
  return scheduleCronJob(cronTime, run)
}

export default startRiskCron
