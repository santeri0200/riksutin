import logger from '../../util/logger'
import seedSurveys from './surveys'
import seedQuestions from './questions'
import seedResults from './results'
import seedUsers from './user'

const seed = async () => {
  try {
    await seedSurveys()
    await seedQuestions()
    await seedResults()
    await seedUsers()
    logger.info('Seeding successful')
  } catch (e) {
    logger.error('Seeding failed: ', e)
  }
}

export default seed
