import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import useRecommendations from '../../hooks/useRecommendations'
import useSurvey from '../../hooks/useSurvey'

import Tools from './Tools'
import ShowMore from '../Common/ShowMore'

import styles from '../../styles'

import { InputProps } from '../../types'

const Recommendations = ({ watch }: InputProps) => {
  const { t } = useTranslation()
  const { survey } = useSurvey()
  const { recommendations, isSuccess: recommendationsFetched } =
    useRecommendations(survey?.id)

  const { recommendationStyles, cardStyles } = styles

  if (!recommendationsFetched || !recommendations || !survey || !watch)
    return null

  return (
    <Box sx={recommendationStyles.recommendationContainer}>
      <Typography
        data-cy="recommendation-section-title"
        variant="h5"
        sx={cardStyles.heading}
        component="span"
      >
        {t('recommendations:title')}
        <ShowMore text={t('recommendations:infoBoxText')} />
      </Typography>

      <Tools recommendations={recommendations} />
    </Box>
  )
}

export default Recommendations
