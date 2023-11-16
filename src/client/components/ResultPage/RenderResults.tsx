import React from 'react'
import { Box } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'
import useResultRefCallback from '../../hooks/useResultRefCallback'

import TotalRisk from './TotalRisk'

import { useResultData } from '../../contexts/ResultDataContext'
import useCountries from '../../hooks/useCountries'
import RenderAnswers from './RenderAnswers'

const RenderResults = () => {
  const { survey } = useSurvey()
  const { countries, isLoading } = useCountries()
  const refCallback = useResultRefCallback()

  const { resultData } = useResultData()

  if (isLoading || !countries || !survey || !resultData) return null

  const selectedCountry: any = resultData['8']
  const selectedCountryCode = countries.find(
    (country) => country.name === selectedCountry
  )?.code

  return (
    <Box ref={refCallback}>
      <RenderAnswers survey={survey} resultData={resultData} />
      <TotalRisk
        selectedCountryCode={selectedCountryCode}
        questions={survey.Questions}
      />
    </Box>
  )
}

export default RenderResults
