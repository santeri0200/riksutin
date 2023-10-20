import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { Locales, PossibleChoiceTypes, Question } from '@backend/types'
import { UseFormWatch } from 'react-hook-form'

import { useTranslation } from 'react-i18next'
import MultiChoice from '../Choices/MultiChoice'
import SingleChoice from '../Choices/SingleChoice'
import Text from '../Choices/TextField'
import DropDownSelect from '../Choices/DropDownSelect'
import Markdown from '../Common/Markdown'
import ShowMore from '../Common/ShowMore'

import { InputProps } from '../../types'

import styles from '../../styles'
import useCountries from '../../hooks/useCountries'

const { cardStyles } = styles

const QuestionText = ({
  question,
  language,
  watch,
}: {
  question: Question
  language: keyof Locales
  watch: UseFormWatch<any>
}) => {
  const { t } = useTranslation()
  if (question.optionData.type === 'info')
    return (
      <Typography component="span">
        {question.title[language]}
        <ShowMore text={question.text[language as keyof Locales]} />
      </Typography>
    )

  return (
    <>
      {question.id === 5 && watch('4') === 'multilateral' ? (
        <Markdown>
          {t('questions:optionalPartnerOrganisationNameQuestion')}
        </Markdown>
      ) : (
        <Markdown>{question.title[language]}</Markdown>
      )}
      <Box sx={cardStyles.content}>
        <Markdown>{question.text[language]}</Markdown>
      </Box>
    </>
  )
}

const RenderQuestions = ({
  control,
  watch,
  question,
  questions,
  language,
}: InputProps) => {
  const { countries, isLoading } = useCountries()

  if (isLoading || !question || !questions || !watch || !countries) return null

  const selectedCountry = watch('8')
  const selectedCountryCode = countries.find(
    (country) => country.name === selectedCountry
  )?.code

  if (question.visibility?.options) {
    const [...options] = question.visibility.options

    if (!question.parentId) return null

    const parent = watch(question.parentId.toString())

    if (typeof parent === 'object') {
      const questionSelectionToArray = Object.keys(parent).filter(
        (k) => parent[k]
      )
      const hasAllValuesSelected = question.visibility.options.some((x) =>
        questionSelectionToArray.includes(x)
      )

      if (!hasAllValuesSelected) return null
    } else if (!options.includes(parent)) return null
  }

  const components: {
    [key in PossibleChoiceTypes]: (...args: InputProps[]) => JSX.Element | null
  } = {
    singleChoice: SingleChoice,
    multipleChoice: MultiChoice,
    info: SingleChoice,
    text: Text,
    select: DropDownSelect,
  }

  const Choice = components[question.optionData.type as PossibleChoiceTypes]

  if (!Choice) return null

  const childQuestions = questions.filter(
    (childQuestion) => question.id === childQuestion.parentId
  )
  return (
    <Container sx={cardStyles.questionsContainer}>
      <QuestionText
        question={question}
        language={language as keyof Locales}
        watch={watch}
      />
      <Choice
        key={question.id}
        control={control}
        question={question}
        language={language}
        selectedCountry={selectedCountryCode}
      >
        {childQuestions &&
          childQuestions.map((children) => (
            <RenderQuestions
              key={children.id}
              control={control}
              watch={watch}
              question={children}
              questions={questions}
              language={language}
            />
          ))}
      </Choice>
    </Container>
  )
}

export default RenderQuestions
