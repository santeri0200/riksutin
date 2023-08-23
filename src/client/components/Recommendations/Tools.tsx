import React from 'react'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { Locales } from '@backend/types'

import Markdown from '../Common/Markdown'

import styles from '../../styles'
import { Recommendation } from '../../types'

const Tools = ({ recommendations }: { recommendations: Recommendation[] }) => {
  const { i18n } = useTranslation()
  const { language } = i18n

  const { recommendationStyles } = styles

  return (
    <>
      {recommendations.map((recommendation) => (
        <Box
          key={recommendation.id}
          sx={recommendationStyles.recommendationBox}
        >
          <Box>
            <Markdown>
              {recommendation.title[language as keyof Locales]}
            </Markdown>
          </Box>
          <Markdown>{recommendation.text[language as keyof Locales]}</Markdown>
        </Box>
      ))}
    </>
  )
}

export default Tools
