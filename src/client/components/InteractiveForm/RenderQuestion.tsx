import React from 'react'
import { Box, Typography } from '@mui/material'
import { Locales, PossibleChoiceTypes, Question } from '@backend/types'
import { UseFormWatch } from 'react-hook-form'

import { useTranslation } from 'react-i18next'
import useLoggedInUser from '../../hooks/useLoggedInUser'
import MultiChoice from '../QuestionTypes/MultiChoice'
import SingleChoice from '../QuestionTypes/SingleChoice'
import Text from '../QuestionTypes/Text'
import DropDownSelect from '../QuestionTypes/DropDownSelect'
import ShowMore from '../Common/ShowMore'

import { InputProps } from '../../types'

import styles from '../../styles'
import useCountries from '../../hooks/useCountries'
import SelectFaculty from '../Common/SelectFaculty'
import OrganisationSelect from '../QuestionTypes/OrganisationSelect'
import UniversitySelect from '../QuestionTypes/UniversitySelect'

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

  return (
    <>
      <Typography component="span" sx={{ color: 'red' }}>
        {question.id !== 7 && '* '}
      </Typography>
      <Typography component="span">
        {question.id === 5 && watch('4') === 'multilateral'
          ? t('questions:optionalPartnerOrganisationNameQuestion')
          : question.title[language as keyof Locales]}
        {question.text[language as keyof Locales] && (
          <ShowMore text={question.text[language as keyof Locales]} />
        )}
      </Typography>
    </>
  )
}

const RenderQuestion = ({
  control,
  watch,
  question,
  questions,
  language,
}: InputProps) => {
  const { countries, isLoading } = useCountries()
  const { user } = useLoggedInUser()

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
    organisationSelect: OrganisationSelect,
    universitySelect: UniversitySelect,
  }

  const QuestionType =
    components[question.optionData.type as PossibleChoiceTypes]

  if (!QuestionType) return null

  const childQuestions = questions.filter(
    (childQuestion) => question.id === childQuestion.parentId
  )
  return (
    <Box>
      <Box sx={cardStyles.questionsContainer}>
        <QuestionText
          question={question}
          language={language as keyof Locales}
          watch={watch}
        />
        <QuestionType
          key={question.id}
          control={control}
          question={question}
          language={language}
          selectedCountry={selectedCountryCode}
          watch={watch}
          defaultValue={
            question.id === 1 ? `${user?.firstName} ${user?.lastName}` : ''
          }
        >
          {childQuestions &&
            childQuestions.map((children) => (
              <RenderQuestion
                key={children.id}
                control={control}
                watch={watch}
                question={children}
                questions={questions}
                language={language}
              />
            ))}
        </QuestionType>
      </Box>
      {question.id === 1 && <SelectFaculty control={control} />}
    </Box>
  )
}

export default RenderQuestion
