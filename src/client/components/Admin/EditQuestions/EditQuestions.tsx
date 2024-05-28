import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import useSurvey from '../../../hooks/useSurvey'
import useQuestions from '../../../hooks/useQuestions'

import EditQuestion from './EditQuestion'

const EditQuestions = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { questionId } = useParams()

  const { survey } = useSurvey()
  const { questions, isLoading } = useQuestions(survey?.id)

  if (isLoading || !survey || !questions || !questionId) return null

  const selectedLanguage = 'en'

  const selectedQuestion = questions.find(
    (question) => question.id === Number(questionId)
  )

  const handleQuestionDeletion = () => {
    navigate({
      pathname: '/admin/edit-questions',
      search: location.search,
    })
  }

  return (
    <Box width="100%" flexWrap="wrap">
      {selectedQuestion ? (
        <Box sx={{ my: 4 }}>
          <Typography sx={{ my: 4, pl: 1 }} variant="h4">
            {t('admin:questionViewQuestionEdit')}
          </Typography>
          <EditQuestion
            language={selectedLanguage}
            question={selectedQuestion}
            onDelete={handleQuestionDeletion}
          />
        </Box>
      ) : (
        <Typography sx={{ my: 4, pl: 1 }} variant="h4">
          {t('admin:questionViewInfo')}
        </Typography>
      )}
    </Box>
  )
}

export default EditQuestions
