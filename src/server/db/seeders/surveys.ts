import { Survey } from '@dbmodels'
import getSurveyData from '../../data/survey'

const seedSurveys = async () => {
  const survey = getSurveyData()
  await Survey.upsert({
    ...survey,
  })
}

export default seedSurveys
