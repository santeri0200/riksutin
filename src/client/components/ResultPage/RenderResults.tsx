import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'

import { Locales } from '@backend/types'

import useSurvey from '../../hooks/useSurvey'
import useResults from '../../hooks/useResults'
import useResultRefCallback from '../../hooks/useResultRefCallback'

import ResultElement from './ResultElement'
import corruptionData from '../../../server/data/corruption.json'

import { useResultData } from '../../contexts/ResultDataContext'
import { Dimension } from '../../types'
import styles from '../../styles'

const { resultStyles } = styles

interface RenderResultProps {
  resultArray: string[][]
  dimensionSelections: Dimension[]
}

const getCorruptionRank = (selectedCountry: any) => {
  const foundCountry = corruptionData.find(
    (countryData) =>
      countryData.country === selectedCountry && countryData.year === 2022
  )
  return foundCountry
}

const RenderResults = ({
  resultArray,
  dimensionSelections,
}: RenderResultProps) => {
  const { t, i18n } = useTranslation()
  const { survey } = useSurvey()
  const { results, isSuccess: resultsFetched } = useResults(survey?.id)
  const refCallback = useResultRefCallback()

  const { resultData } = useResultData()
  const { language } = i18n

  if (!survey || !resultsFetched || !resultData || !dimensionSelections)
    return null

  const selectedCountry: any = resultData['11']

  return (
    <Box ref={refCallback}>
      {selectedCountry && (
        <Box sx={resultStyles.resultElementWrapper}>
          <Box sx={resultStyles.card}>
            {t('results:selectedCountry')}: {selectedCountry}
          </Box>
          <Box sx={resultStyles.card}>
            {t('results:corruptionRank')}:
            {getCorruptionRank(selectedCountry)?.rank}
          </Box>
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
