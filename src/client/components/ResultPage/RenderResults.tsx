import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'
import useResults from '../../hooks/useResults'
import useResultRefCallback from '../../hooks/useResultRefCallback'

import TotalRisk from './TotalRisk'

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
