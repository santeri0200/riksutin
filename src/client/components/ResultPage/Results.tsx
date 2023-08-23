import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, Container, Typography } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'

import RenderResults from './RenderResults'
import SurveyButtons from '../Common/SurveyButtons'
import SendSummaryEmail from './SendSummaryEmail'
import ProceedToContact from './ProceedToContact'

import { useResultData } from '../../contexts/ResultDataContext'

import styles from '../../styles'
import { getResultArray } from '../../util/results'
import { LOCATION_KEY } from '../../../config'

const { cardStyles, resultStyles } = styles

const Results = ({
  setShowResults,
}: {
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { t } = useTranslation()
  const { survey } = useSurvey()
  const { resultData } = useResultData()

  if (!survey || !resultData) return null

  const dimensionSelections = [
    {
      id: 'allDimensions',
      label: 'allDimensions',
      color: '#000000',
      title: {
        fi: 'Kaikki',
        sv: 'All',
        en: 'All',
      },
      text: {
        fi: 'Kaikki',
        sv: 'All',
        en: 'All',
      },
    },
  ]

  const resultArrays = getResultArray(resultData)

  // Rest of the selections and empty values filtered
  const resultArray = resultArrays.filter(([x]) => x !== '')

  const onNavigateBack = () => {
    sessionStorage.setItem(LOCATION_KEY, 'form')
    setShowResults(false)

    document
      ?.getElementById('survey-main-section')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box>
      <Box sx={cardStyles.outerBox}>
        <Box sx={resultStyles.resultWrapper}>
          <Container sx={{ mt: 4 }}>
            <Typography
              data-cy="result-section-title"
              variant="h5"
              sx={resultStyles.heading}
              component="div"
            >
              {t('results:title')}
            </Typography>
          </Container>

          <RenderResults
            resultArray={resultArray}
            dimensionSelections={dimensionSelections}
          />

          <SendSummaryEmail />

          <SurveyButtons>
            <Button data-cy="back-to-selections" onClick={onNavigateBack}>
              {'<'} {t('results:backToMessage')}
            </Button>
          </SurveyButtons>
        </Box>
      </Box>

      <ProceedToContact />
    </Box>
  )
}

export default Results
