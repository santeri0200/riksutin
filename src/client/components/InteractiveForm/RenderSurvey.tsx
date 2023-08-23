import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'

import RenderQuestions from './RenderQuestions'
import SurveyButtons from '../Common/SurveyButtons'
import RenderSelections from './RenderSelections'

import { FORM_DATA_KEY } from '../../../config'

import { InputProps } from '../../types'
import styles from '../../styles'

const RenderSurvey = ({ control, watch, isSubmitted }: InputProps) => {
  const { t, i18n } = useTranslation()
  const { survey, isLoading } = useSurvey()

  const savedData = sessionStorage.getItem(FORM_DATA_KEY)
  const [showQuestions, setShowQuestions] = useState(
    savedData && savedData !== '{}'
  )

  if (!survey || !watch) return null

  const { cardStyles, formStyles } = styles

  const { language } = i18n

  if (isLoading) return null

  const questions = survey.Questions

  return (
    <Box sx={cardStyles.outerBox}>
      <RenderSelections control={control} />

      <Box sx={cardStyles.card}>
        {questions.map((question) => (
          <div key={question.id}>
            {showQuestions && question.parentId === null && (
              <RenderQuestions
                control={control}
                watch={watch}
                question={question}
                questions={questions}
                language={language}
              />
            )}
          </div>
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
              <Button
                sx={formStyles.stackButton}
                type="submit"
                data-cy="submit-form-button"
                variant="contained"
              >
                {isSubmitted ? t('updateSubmit') : t('submit')}
              </Button>
            </SurveyButtons>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default RenderSurvey
