/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

import { Question } from '@backend/types'
import { Control, UseFormWatch } from 'react-hook-form/dist/types'
import RenderQuestion from './RenderQuestion'
import SurveyButtons from '../Common/SurveyButtons'

import { useResultData } from '../../contexts/ResultDataContext'

import { InputProps } from '../../types'
import styles from '../../styles'

const RenderSurvey = ({
  questions,
  control,
  watch,
  isSubmitted,
  submitButtonLoading,
}: {
  control: Control<any>
  watch: UseFormWatch<any>
  questions: Question[]
  isSubmitted: boolean
  submitButtonLoading: boolean
}) => {
  const { t, i18n } = useTranslation()

  const { resultData } = useResultData()
  const [showQuestions, setShowQuestions] = useState(Boolean(resultData))

  if (!questions || !watch) return null

  const { cardStyles, formStyles } = styles

  const { language } = i18n

  return (
    <Box sx={cardStyles.outerBox}>
      <Box sx={cardStyles.card}>
        {questions.map((question) => (
          <Box key={question.id} sx={cardStyles.card}>
            {showQuestions && question.parentId === null && (
              <RenderQuestion
                control={control}
                watch={watch}
                question={question}
                questions={questions}
                language={language}
              />
            )}
          </Box>
        ))}

        <Box sx={formStyles.stackBox}>
          {!showQuestions ? (
            <Button
              data-cy="open-form-button"
              onClick={() => setShowQuestions(true)}
            >
              {t('openForm')}
            </Button>
          ) : (
            <SurveyButtons>
              <LoadingButton
                sx={formStyles.stackButton}
                type="submit"
                data-cy="submit-form-button"
                variant="contained"
                loading={submitButtonLoading}
              >
                {isSubmitted ? t('updateSubmit') : t('submit')}
              </LoadingButton>
            </SurveyButtons>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default RenderSurvey
