import { Result } from '@dbmodels'
import getResultData from '../../data/results'

const seedResults = async () => {
  const results: any = getResultData()

  results.forEach(async (result: any) => {
    await Result.upsert({
      ...result,
    })
  })
}

export default seedResults
