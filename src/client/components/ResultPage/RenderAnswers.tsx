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
    const texts = answer.map(
      (value: string) =>
        question.optionData.options.find((option) => option.id === value)
          ?.title[language as keyof Locales]
    )

    return { [questionId]: texts.join(', ') || '' }
  })

  if (resultData.selectOrganisation) {
    // eslint-disable-next-line no-param-reassign
    resultData[22] = resultData.selectOrganisation
  }

  const answers = {
    ...resultData,
    ...Object.assign({}, ...singleChoiceAnswers),
    ...Object.assign({}, ...multiChoiceAnswers),
  }

  return (
    <>
      <Typography variant="h6" component="div" sx={{ paddingTop: '20px' }}>
        {t('results:answerBoxTitle')}
      </Typography>
      <Box sx={resultStyles.resultElementWrapper}>
        {survey?.Questions.map((question) => (
          <Box key={question.id}>
            {!question.parentId && (
              <>
                <Box sx={resultStyles.card}>
                  <Typography variant="body1">
                    <b>{question.title[language as keyof Locales]}</b>
                    <br />
                    {answers[question.id] as string}
                  </Typography>
                </Box>
                {survey?.Questions.filter(
                  (q) => q.parentId === question.id
                )?.map((q) => (
                  <Box key={q.id}>
                    {answers[q.id] && (
                      <Box
                        sx={{
                          m: 2,
                          borderLeft: 1,
                          margin: '15px',
                          paddingLeft: '10px',
                        }}
                      >
                        <Typography variant="body1">
                          <b>{q.title[language as keyof Locales]}</b>
                          <br />
                          {answers[q.id]}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                ))}
              </>
            )}
            {question.id === 6 && answers[21] && (
              <Box
                sx={{
                  m: 2,
                  borderLeft: 1,
                  margin: '15px',
                  paddingLeft: '10px',
                }}
              >
                <Typography variant="body1">
                  <b>
                    {
                      survey.Questions.find((q) => q.id === 21)?.title[
                        language as keyof Locales
                      ]
                    }
                  </b>
                  <br />
                  {answers[21]}
                </Typography>
              </Box>
            )}
            {question.id === 1 && (
              <Box sx={resultStyles.card}>
                <Typography variant="body1">
                  <b>{t('facultySelect:title')}</b>
                  <br />
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
