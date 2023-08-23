/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react'
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import { Control, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { HexColorInput, HexColorPicker } from 'react-colorful'
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material'

import { Locales } from '@backend/types'

import useSurvey from '../../hooks/useSurvey'
import useQuestions from '../../hooks/useQuestions'
import useRecommendations from '../../hooks/useRecommendations'

import { allSelection, languages } from './config'

import sortQuestions from '../../util/questions'

type HandleChange = (event: SelectChangeEvent) => void

const SelectWrapper = ({
  label,
  value,
  handleChange,
  children,
}: {
  label: string
  value: string
  handleChange: HandleChange
  children: React.ReactNode
}) => (
  <Box sx={{ width: '20vw', mx: 4 }}>
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        value={value}
        defaultValue=""
        onChange={handleChange}
      >
        {children}
      </Select>
    </FormControl>
  </Box>
)

export const DialogSelect = ({
  label,
  value,
  control,
  children,
  defaultValue = '',
}: {
  label: string
  value: string
  control: Control<any>
  children: React.ReactNode
  // eslint-disable-next-line react/require-default-props
  defaultValue?: any
}) => (
  <Controller
    control={control}
    name={value}
    defaultValue={defaultValue}
    render={({ field }) => (
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select {...field} size="medium" label={label}>
          {children}
        </Select>
      </FormControl>
    )}
  />
)

export const LanguageSelect = () => {
  const { t, i18n } = useTranslation()
  const language = i18n.language as keyof Locales
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedLanguage, setSelectedLanguage] = useState<keyof Locales>('en')

  useEffect(() => {
    const persistLanguage = searchParams.get('transLang')

    if (persistLanguage) setSelectedLanguage(persistLanguage as keyof Locales)

    if (!persistLanguage) setSearchParams({ transLang: selectedLanguage })
  }, [searchParams, selectedLanguage, setSearchParams])

  const handleLanguageChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value as keyof Locales

    setSelectedLanguage(newLanguage)
    setSearchParams({ language: newLanguage })
  }

  return (
    <Box sx={{ width: '20vw' }}>
      <FormControl fullWidth>
        <FormLabel>{t('admin:selectLanguage')}</FormLabel>
        <RadioGroup defaultValue="en" onChange={handleLanguageChange} row>
          {languages.map(({ id, title }) => (
            <FormControlLabel
              key={id}
              value={id}
              control={<Radio />}
              label={title[language]}
              checked={selectedLanguage === id}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export const ResultDimensionSelect = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { questionId, dimensionId: persistDimensionId } = useParams()

  const [dimensionId, setDimensionId] = useState('allDimensions')

  useEffect(() => {
    if (persistDimensionId) setDimensionId(persistDimensionId)

    if (questionId && !persistDimensionId) {
      navigate({
        pathname: `./${questionId}/${dimensionId}`,
        search: location.search,
      })
    }
  }, [dimensionId, location.search, navigate, persistDimensionId, questionId])

  const handleDimensionChange = (event: SelectChangeEvent) => {
    setDimensionId(event.target.value)

    navigate({
      pathname: `./${questionId}/${event.target.value}`,
      search: location.search,
    })
  }

  const language = i18n.language as keyof Locales

  const dimensionSelections = [allSelection]

  return (
    <SelectWrapper
      label={t('admin:selectDimension')}
      value={dimensionId}
      handleChange={handleDimensionChange}
    >
      {dimensionSelections.map(({ id, title }) => (
        <MenuItem key={id} value={id}>
          {title[language]}
        </MenuItem>
      ))}
    </SelectWrapper>
  )
}

export const QuestionSelect = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { questionId } = useParams()

  const { survey } = useSurvey()
  const { questions, isSuccess } = useQuestions(survey?.id)

  const handleQuestionChange = (event: SelectChangeEvent) => {
    navigate({
      pathname: `./${event.target.value}`,
      search: location.search,
    })
  }

  const language = i18n.language as keyof Locales

  if (!isSuccess || !questions) return null

  const filteredQuestions = questions.filter(
    ({ optionData }) => !['dimensions'].includes(optionData.type)
  )
  const sortedQuestions = sortQuestions(filteredQuestions, language)

  return (
    <SelectWrapper
      label={t('admin:selectQuestion')}
      value={questionId || ''}
      handleChange={handleQuestionChange}
    >
      {sortedQuestions.map(({ id, title }) => (
        <MenuItem key={id} value={id}>
          {title[language]}
        </MenuItem>
      ))}
    </SelectWrapper>
  )
}

export const RecommendationSelect = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { recommendationId } = useParams()

  const { survey } = useSurvey()
  const { recommendations, isSuccess } = useRecommendations(survey?.id)

  const handleRecommendationChange = (event: SelectChangeEvent) => {
    navigate({
      pathname: `./${event.target.value}`,
      search: location.search,
    })
  }

  if (!isSuccess || !recommendations) return null

  return (
    <SelectWrapper
      label={t('admin:selectRecommendation')}
      value={recommendationId || ''}
      handleChange={handleRecommendationChange}
    >
      {recommendations.map(({ id, label }) => (
        <MenuItem key={id} value={id}>
          {label}
        </MenuItem>
      ))}
    </SelectWrapper>
  )
}

export const ColorSelect = ({
  label,
  value,
  setValue,
}: {
  label: string
  value: string
  setValue: (newColor: string) => void
}) => (
  <Box sx={{ my: 4 }}>
    <InputLabel>{label}</InputLabel>
    <Box sx={{ mt: 2 }}>
      <HexColorPicker color={value} onChange={setValue} />
      <HexColorInput color={value} onChange={setValue} />
    </Box>
  </Box>
)
