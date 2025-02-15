import type { Locales, Question } from '@types'

const sortQuestions = (questions: Question[], language: keyof Locales) => {
  return questions.sort((a, b) => a.title[language]?.localeCompare(b.title[language]!) ?? 0)
}

export default sortQuestions
