import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'

import { Locales } from '@backend/types'

import useSurvey from '../../hooks/useSurvey'
import useResults from '../../hooks/useResults'
import useResultRefCallback from '../../hooks/useResultRefCallback'

import ResultElement from './ResultElement'
import CountryResults from './CountryResults'

import { useResultData } from '../../contexts/ResultDataContext'
import { Dimension } from '../../types'
import styles from '../../styles'
import useCountries from '../../hooks/useCountries'

const { resultStyles } = styles

interface RenderResultProps {
  resultArray: string[][]
  dimensionSelections: Dimension[]
}

const RenderResults = ({
  resultArray,
  dimensionSelections,
}: RenderResultProps) => {
  const { t, i18n } = useTranslation()
  const { survey } = useSurvey()
  const { results, isSuccess: resultsFetched } = useResults(survey?.id)
  const { countries, isLoading } = useCountries()
  const refCallback = useResultRefCallback()

  const { resultData } = useResultData()
  const { language } = i18n

  if (
    isLoading ||
    !countries ||
    !survey ||
    !resultsFetched ||
    !resultData ||
    !dimensionSelections
  )
    return null

  const selectedCountry: any = resultData['11']
  const selectedCountryCode = countries.find(
    (country) => country.name === selectedCountry
  )?.code

  const basicInfoQuestions = survey.Questions.filter(
    (question) => question.optionData.type === 'text'
  )

  return (
    <Box ref={refCallback}>
      <Box sx={resultStyles.resultElementWrapper}>
        {basicInfoQuestions.map((question) => (
          <Box key={JSON.stringify(question.id)} sx={resultStyles.card}>
            {question.title[language as keyof Locales]}:{' '}
            {resultData[question.id]}
          </Box>
        ))}
      </Box>
      {selectedCountryCode && (
        <Box sx={resultStyles.resultElementWrapper}>
          <CountryResults
            selectedCountryCode={selectedCountryCode}
            selectedCountry={selectedCountry}
          />
        </Box>
      )}

      {resultArray.map((resultLabels) =>
        resultLabels.map((resultLabel) => (
          <ResultElement
            key={JSON.stringify(resultLabel)}
            language={language as keyof Locales}
            resultData={results?.find(
              (result: { optionLabel: string }) =>
                result.optionLabel === resultLabel
            )}
            dimensionSelections={dimensionSelections}
          />
        ))
      )}
    </Box>
  )
}

export default RenderResults
