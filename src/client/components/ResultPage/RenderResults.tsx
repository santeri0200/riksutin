import React from 'react'
import { Box } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'
import useResultRefCallback from '../../hooks/useResultRefCallback'

import RiskTable from './RiskTable'

import useCountries from '../../hooks/useCountries'
import RenderAnswers from './RenderAnswers'
import useResults from '../../hooks/useResults'
import { RiskData } from '../../types'

const RenderResults = ({ riskData }: { riskData: RiskData }) => {
  const { survey } = useSurvey()
  const { countries, isLoading } = useCountries()
  const refCallback = useResultRefCallback()

  const { results, isSuccess: resultsFetched } = useResults(survey?.id)

  if (isLoading || !countries || !survey || !resultsFetched || !results)
    return null

  const selectedCountry: string = riskData.answers['8']
  const selectedCountryCode = countries.find(
    (country) => country.name === selectedCountry
  )?.code

  return (
    <Box ref={refCallback}>
      <RiskTable
        selectedCountryCode={selectedCountryCode}
        questions={survey.Questions}
        results={results}
        resultData={riskData.answers}
      />
      <RenderAnswers survey={survey} resultData={riskData.answers} />
    </Box>
  )
}

export default RenderResults
