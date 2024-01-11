import React from 'react'
import { Box } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'
import useResultRefCallback from '../../hooks/useResultRefCallback'

import TotalRisk from './TotalRisk'

import { useResultData } from '../../contexts/ResultDataContext'
import useCountries from '../../hooks/useCountries'
import RenderAnswers from './RenderAnswers'
import useResults from '../../hooks/useResults'

const RenderResults = () => {
  const { survey } = useSurvey()
  const { countries, isLoading } = useCountries()
  const refCallback = useResultRefCallback()

  const { resultData } = useResultData()

  const { results, isSuccess: resultsFetched } = useResults(survey?.id)

  if (
    isLoading ||
    !countries ||
    !survey ||
    !resultData ||
    !resultsFetched ||
    !results
  )
    return null

  const selectedCountry: any = resultData['8']
  const selectedCountryCode = countries.find(
    (country) => country.name === selectedCountry
  )?.code

  return (
    <Box ref={refCallback}>
      <TotalRisk
        selectedCountryCode={selectedCountryCode}
        questions={survey.Questions}
        results={results}
      />
      <RenderAnswers survey={survey} resultData={resultData} />
    </Box>
  )
}

export default RenderResults
