import { FormValues, Question, Result } from '@backend/types'

const getRiskValues = (
  data: FormValues,
  questions: Question[],
  results: Result[],
  language: string
) => {
  console.log(data)
  return data
}

export default getRiskValues
