import { useMutation } from 'react-query'

import { DEFAULT_SURVEY_NAME } from '@client/config'

import apiClient from '../util/apiClient'
import queryClient from '../util/queryClient'

import { UpdatedSurveyInfo } from '../../validators/survey'

// eslint-disable-next-line import/prefer-default-export
export const useEditSurveyMutation = (name = DEFAULT_SURVEY_NAME) => {
  const mutationFn = async (data: UpdatedSurveyInfo) => {
    await apiClient.put(`/surveys/${name}`, data)
  }

  const mutation = useMutation(mutationFn, {
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['survey', name],
      }),
  })

  return mutation
}
