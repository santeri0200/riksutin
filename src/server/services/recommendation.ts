import { Recommendation, Survey } from '../db/models'

import {
  NewRecommendation,
  NewRecommendationZod,
  UpdatedRecommendation,
  UpdatedRecommendationZod,
} from '../../validators/recommendations'

import NotFoundError from '../errors/NotFoundError'
import ZodValidationError from '../errors/ValidationError'

export const getRecommendations = async (
  surveyId: string
): Promise<Recommendation[]> => {
  const recommendations = await Recommendation.findAll({
    where: {
      surveyId,
    },
  })

  if (!recommendations.length)
    throw new NotFoundError('Recommendations not found')

  return recommendations
}

export const updateRecommendation = async (
  recommendationId: string,
  updatedRecommendationValues: UpdatedRecommendation
): Promise<Recommendation> => {
  const recommendation = await Recommendation.findByPk(recommendationId)
  if (!recommendation)
    throw new NotFoundError('Recommendation to update not found')

  const request = UpdatedRecommendationZod.safeParse(
    updatedRecommendationValues
  )

  if (!request.success)
    throw new ZodValidationError(
      'Validation of the recommendation update values failed',
      request.error.issues
    )

  const { data } = request

  Object.assign(recommendation, data)

  await recommendation.save()

  return recommendation
}

export const createRecommendation = async (
  surveyId: string,
  newRecommendationValues: NewRecommendation
): Promise<Recommendation> => {
  const survey = await Survey.findByPk(surveyId)

  if (!survey)
    throw new NotFoundError(
      'Survey not found while creating a new recommendation'
    )

  const request = NewRecommendationZod.safeParse(newRecommendationValues)

  if (!request.success) throw new Error('Validation failed')
  const body = request.data

  const newRecommendation = await Recommendation.create({
    surveyId: Number(surveyId),
    label: body.label,
    type: body.type,
    title: body.title,
    text: body.text,
  })

  return newRecommendation
}

export const deleteRecommendation = async (
  recommendationId: string
): Promise<Recommendation> => {
  const recommendation = await Recommendation.findByPk(recommendationId)
  if (!recommendation)
    throw new NotFoundError('Recommendation to delete not found')

  await recommendation.destroy()

  return recommendation
}
