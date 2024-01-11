import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, Container, Typography } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'

import RenderResults from './RenderResults'
import SurveyButtons from '../Common/SurveyButtons'

import { useResultData } from '../../contexts/ResultDataContext'

import styles from '../../styles'
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

  const onNavigateBack = () => {
    sessionStorage.setItem(LOCATION_KEY, 'form')
    setShowResults(false)

    document
      ?.getElementById('survey-main-section')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
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

        <RenderResults />

        <SurveyButtons>
          <Button data-cy="back-to-selections" onClick={onNavigateBack}>
            {'<'} {t('results:backToMessage')}
          </Button>
        </SurveyButtons>
      </Box>
    </Box>
  )
}

export default Results
