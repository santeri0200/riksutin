import React from 'react'
import { useTranslation } from 'react-i18next'
import { Locales } from '@backend/types'
import { Box, Typography } from '@mui/material'

import { extraOrganisations } from '../../util/organisations'

import styles from '../../styles'
import { FormValues, Survey } from '../../types'
import useFaculties from '../../hooks/useFaculties'

const { resultStyles } = styles

const RenderAnswers = ({
  survey,
  resultData,
}: {
  survey: Survey
  resultData: FormValues
}) => {
  const { t, i18n } = useTranslation()
  const { language } = i18n
  const { faculties, isLoading: facultiesLoading } = useFaculties()

  if (facultiesLoading || !faculties) return null

  const organisations = faculties.concat(extraOrganisations)

  const multiChoiceQuestions = survey.Questions.filter(
    (question) => question.optionData.type === 'multipleChoice'
  )

  const singleChoiceQuestions = survey.Questions.filter(
    (question) => question.optionData.type === 'singleChoice'
  )

  const singleChoiceAnswers = singleChoiceQuestions.map((question) => {
    const questionId = question.id
    const answer = resultData[questionId]
    const text = question.optionData.options.find((o) => o.id === answer)
      ?.title[language as keyof Locales]

    return { [questionId]: text || '' }
  })

  const multiChoiceAnswers = multiChoiceQuestions.map((question) => {
    const questionId = question.id
    const answer = resultData[questionId]
    const trues = Object.entries(answer)
      .filter((pair) => pair[1] === true)
      .map((pair) => pair[0])
      .flat(1)
    const texts = trues.map(
      (value) =>
        question.optionData.options.find((o) => o.id === value)?.title[
          language as keyof Locales
        ]
    )

    return { [questionId]: texts.join(', ') || '' }
  })

  const answers = {
    ...resultData,
    ...Object.assign({}, ...singleChoiceAnswers),
    ...Object.assign({}, ...multiChoiceAnswers),
  }

  return (
    <>
      <Typography
        data-cy="result-section-title"
        variant="h6"
        component="div"
        sx={{ paddingTop: '20px' }}
      >
        {t('results:answerBoxTitle')}
      </Typography>
      <Box sx={resultStyles.resultElementWrapper}>
        {survey?.Questions.map((question) => (
          <Box key={question.id}>
            {question.parentId === null ? (
              <>
                <Box sx={resultStyles.card}>
                  <Typography variant="body1">
                    {question.title[language as keyof Locales]}:{' '}
                    {answers[question.id] as string}
                  </Typography>
                </Box>
                {survey?.Questions.filter(
                  (q) => q.parentId === question.id
                )?.map((q) => (
                  <Box key={q.id}>
                    {answers[q.id] ? (
                      <Box
                        sx={{
                          m: 2,
                          borderLeft: 1,
                          margin: '15px',
                          paddingLeft: '10px',
                        }}
                      >
                        <Typography variant="body1">
                          {q.title[language as keyof Locales]}: {answers[q.id]}
                        </Typography>
                      </Box>
                    ) : null}
                  </Box>
                ))}
              </>
            ) : null}
            {question.id === 1 && (
              <Box sx={resultStyles.card}>
                <Typography variant="body1">
                  {t('facultySelect:title')}:{' '}
                  {
                    organisations.find(
                      (faculty) => faculty.code === answers.faculty
                    )?.name[language as keyof Locales]
                  }
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </>
  )
}

export default RenderAnswers
