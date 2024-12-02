/**

  This file contains dimension content that has been deleted in for example these commits:
    53892797b148b248fd758c1a064ce1aea5df159a
    29a21aa9c8925efc623ccd1fa7eeb7fd7b902db2

  It seems to be a part of "Kurre", that @HRemonen wanted to delete?
  Tsc complains about checks against invalid question types:
    const dimensionquestion = survey?.Questions.find(
      (question) => question.optionData.type === 'dimention'
    )
  These checks have been replaced with:
    const dimensionquestion = survey?.Questions.find(
      (question) => false
    )

  - @santeri0200

*/

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation } from 'react-query'

import type { Locales } from '@types'

import useSurvey from './useSurvey'

import { NewDimension } from '../../validators/options'

import apiClient from '../util/apiClient'
import queryClient from '../util/queryClient'

type DimensionUpdates = {
  title?: Locales
  text?: Locales
  color?: string
}

export const useCreateDimensionMutation = () => {
  const { survey } = useSurvey()

  const dimensionquestion = survey?.Questions.find((question) => false)

  const mutationFn = async (data: NewDimension) => {
    await apiClient.post(`/questions/${dimensionquestion?.id}/option/`, data)
  }

  const mutation = useMutation(mutationFn, {
    onSuccess: () => queryClient.invalidateQueries('survey'),
  })

  return mutation
}

export const useEditDimensionMutation = (dimensionId: string) => {
  const { survey } = useSurvey()

  const dimensionquestion = survey?.Questions.find((question) => false)

  const mutationFn = async (data: DimensionUpdates) => {
    await apiClient.put(
      `/questions/${dimensionquestion?.id}/option/${dimensionId}`,
      data
    )
  }

  const mutation = useMutation(mutationFn, {
    onSuccess: () => queryClient.invalidateQueries('survey'),
  })

  return mutation
}

export const useDeleteDimensionMutation = (dimensionId: string) => {
  const { survey } = useSurvey()

  const dimensionquestion = survey?.Questions.find((question) => false)

  const mutationFn = async () => {
    await apiClient.delete(
      `/questions/${dimensionquestion?.id}/option/${dimensionId}`
    )
  }

  const mutation = useMutation(mutationFn, {
    onSuccess: () => queryClient.invalidateQueries('survey'),
  })

  return mutation
}
