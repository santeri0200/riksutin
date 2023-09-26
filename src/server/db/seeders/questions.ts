import { Question } from '../models'
import getQuestionData from '../../data/questions'

const seedQuestions = async () => {
  const questions: any[] = await getQuestionData()

  questions.forEach(async (question) => {
    await Question.upsert({
      ...question,
    })
  })
}

export default seedQuestions
