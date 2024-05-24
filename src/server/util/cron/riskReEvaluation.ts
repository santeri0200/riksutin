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

  const reCalculatedDataObject = {
    createdAt: new Date().toISOString(),
    ...reCalculatedData,
  }

  const dataWithRecalculatedValues: RiskData = {
    ...entry.data,
    updatedData: !entry.data.updatedData
      ? new Array(reCalculatedDataObject)
      : entry.data.updatedData.concat(reCalculatedDataObject),
  }

  await entry.update({
    data: dataWithRecalculatedValues,
  })

  const updatedObject = await entry.save({ fields: ['data'] })

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
  const cronTime = '0 0 * * 0'
  logger.info('Cron job activated')
  return scheduleCronJob(cronTime, run)
}

export default startRiskCron
