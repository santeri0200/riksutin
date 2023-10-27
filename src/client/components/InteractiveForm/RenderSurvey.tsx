import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button } from '@mui/material'

import RenderQuestions from './RenderQuestions'
import SurveyButtons from '../Common/SurveyButtons'
import RenderSelections from './RenderSelections'

import { useResultData } from '../../contexts/ResultDataContext'

import { InputProps } from '../../types'
import styles from '../../styles'

const RenderSurvey = ({
  questions,
  control,
  watch,
  isSubmitted,
}: InputProps) => {
  const { t, i18n } = useTranslation()

  const { resultData } = useResultData()
  const [showQuestions, setShowQuestions] = useState(Boolean(resultData))

  if (!questions || !watch) return null

  const { cardStyles, formStyles } = styles

  const { language } = i18n

  return (
    <Box sx={cardStyles.outerBox}>
      <RenderSelections control={control} />

      <Box sx={cardStyles.card}>
        {questions.map((question) => (
          <Box key={question.id} sx={cardStyles.card}>
            {showQuestions && question.parentId === null && (
              <RenderQuestions
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
