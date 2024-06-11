/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet, useParams } from 'react-router-dom'
import { Box, Button } from '@mui/material'

import useSurvey from '../../../hooks/useSurvey'
import useResults from '../../../hooks/useResults'
import { ResultDimensionSelect } from '../Select'

const RenderEditResults = () => {
  const { t } = useTranslation()
  const { questionId } = useParams()
  const { survey } = useSurvey()
  const { results, isSuccess: resultsFetched } = useResults(survey?.id)

  const [openForm, setOpenForm] = useState(false)

  if (!resultsFetched || !results || !survey) return null

  const selectedQuestion = survey.Questions.find(
    (question) => question.id === Number(questionId)
  )

  const options = selectedQuestion?.optionData.options || []
  const optionIds = options.map(({ id }) => id)

  const filteredResults = results.filter(({ optionLabel }) =>
    optionIds.includes(optionLabel)
  )

  return (
    <Box sx={{ mx: 2, mt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          my: 4,
          justifyContent: 'flex-start',
        }}
      >
        <ResultDimensionSelect />
      </Box>

      <Outlet />
    </Box>
  )
}

export default RenderEditResults
