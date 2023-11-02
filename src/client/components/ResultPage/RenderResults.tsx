import React from 'react'
import { Box } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'
import useResultRefCallback from '../../hooks/useResultRefCallback'

import TotalRisk from './TotalRisk'

import { useResultData } from '../../contexts/ResultDataContext'
import styles from '../../styles'
import useCountries from '../../hooks/useCountries'

const { resultStyles } = styles

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
      <Box sx={resultStyles.resultElementWrapper}>
        <TotalRisk selectedCountryCode={selectedCountryCode} />
      </Box>
    </Box>
  )
}

export default RenderResults
