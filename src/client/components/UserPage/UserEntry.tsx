import React from 'react'
import { Box } from '@mui/material'

import { useParams } from 'react-router-dom'
import RenderAnswers from '../ResultPage/RenderAnswers'
import RiskTable from '../ResultPage/RiskTable'
import { useEntry } from '../../hooks/useEntry'
import useSurvey from '../../hooks/useSurvey'
import styles from '../../styles'

const { formStyles } = styles

const UserEntry = () => {
  const { entryId } = useParams()
  const { survey } = useSurvey()
  const { entry } = useEntry(entryId)

  if (!entry || !survey) return null

  const { answers, risks, country } = entry.data

  return (
    <Box sx={formStyles.formWrapper}>
      {risks && country && <RiskTable riskData={entry.data} />}
      <RenderAnswers survey={survey} resultData={answers} />
    </Box>
  )
}

export default UserEntry
