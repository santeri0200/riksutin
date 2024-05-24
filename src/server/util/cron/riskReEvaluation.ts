import { RiskData } from '../../types'
import { Entry } from '../../db/models'
import logger from '../logger'
import scheduleCronJob from './schedule'
import createRiskData from '../algorithm/createRiskData'

export const riskReEvaluation = async (entry: Entry) => {
  const answers = entry?.data.answers
  if (!answers || !entry) return null

  const reCalculatedData = await createRiskData(answers)
  if (!reCalculatedData) return null

  const dataWithRecalculatedValues: RiskData = {
    updatedData: !entry.data.updatedData
      ? new Array({ createdAt: new Date().toISOString(), ...reCalculatedData })
      : entry.data.updatedData.concat({
          createdAt: new Date().toISOString(),
          ...reCalculatedData,
        }),
    ...entry.data,
  }

  await entry.update({
    data: dataWithRecalculatedValues,
  })

  const updatedObject = await entry.save({ fields: ['data'] })
  logger.info(updatedObject)
  logger.info(updatedObject.data.updatedData)

  return updatedObject
}

const run = async () => {
  logger.info('Recalculating data')
  const entries = await Entry.findAll({ where: { id: [1] } })
  entries.forEach(async (entry) => {
    if (!entry) return
    await riskReEvaluation(entry)
  })
}

const startRiskCron = async () => {
  const cronTime = '0 12 * * 0'
  logger.info('Cron job activated')
  return scheduleCronJob(cronTime, run)
}

export default startRiskCron
