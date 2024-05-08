import { CountryData } from '../../types'
import getCountries from '../../data/worldbank/countries'
import { getCountryData } from '../../routes/country'
import { Entry } from '../../db/models'
import logger from '../logger'
import scheduleCronJob from './schedule'

const riskReEvaluation = async (entry: Entry) => {
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

  const reCalculatedData: CountryData = {
    ...countryData,
    sanctions: sanctionsRiskLevel * sanctionsMultiplier,
    safetyLevel: safetyLevelMultiplier * countryData.safetyLevel,
    gdpr: entry.data.country[0]?.gdpr,
  }

  return reCalculatedData
}

const run = async () => {
  logger.info('testing cron job')
  const entries = await Entry.findAll({ where: { id: [220] } })
  entries.forEach(async (entry) => {
    if (!entry) return
    logger.info(entry.id)
    const reCalculatedData = await riskReEvaluation(entry)
    if (!reCalculatedData) return
    // eslint-disable-next-line no-param-reassign
    const updatedCountryArray = [...entry.data.country, reCalculatedData]
    await entry.update({
      data: {
        answers: entry.data.answers,
        risks: entry.data.risks,
        country: updatedCountryArray,
      },
    })
    const updatedObject = await entry.save({ fields: ['data'] })
    logger.info(updatedObject)
  })
}

const startRiskCron = async () => {
  const cronTime = '*/2 * * * *'
  logger.info('cron job activated')
  return scheduleCronJob(cronTime, run)
}

export default startRiskCron
