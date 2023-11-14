import React from 'react'
import { useTranslation } from 'react-i18next'
import { Locales } from '@backend/types'
import { Box } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'
import useResultRefCallback from '../../hooks/useResultRefCallback'

import TotalRisk from './TotalRisk'

import { useResultData } from '../../contexts/ResultDataContext'
import styles from '../../styles'
import useCountries from '../../hooks/useCountries'

const { resultStyles } = styles

const RenderResults = () => {
  const { i18n } = useTranslation()
  const { survey } = useSurvey()
  const { countries, isLoading } = useCountries()
  const refCallback = useResultRefCallback()

  const { resultData } = useResultData()

  if (isLoading || !countries || !survey || !resultData) return null

  const { language } = i18n
  const selectedCountry: any = resultData['8']
  const selectedCountryCode = countries.find(
    (country) => country.name === selectedCountry
  )?.code

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
    <Box ref={refCallback}>
      <Box sx={resultStyles.resultElementWrapper}>
        {survey?.Questions.map((question) => (
          <Box key={question.id}>
            {question.parentId === null ? (
              <>
                <Box sx={resultStyles.card}>
                  {question.title[language as keyof Locales]}:{' '}
                  {answers[question.id] as string}
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
                        {q.title[language as keyof Locales]}: {answers[q.id]}
                      </Box>
                    ) : null}
                  </Box>
                ))}
              </>
            ) : null}
          </Box>
        ))}
      </Box>
      <Box sx={resultStyles.resultElementWrapper}>
        <TotalRisk
          selectedCountryCode={selectedCountryCode}
          questions={survey.Questions}
        />
      </Box>
    </Box>
  )
}

export default RenderResults
