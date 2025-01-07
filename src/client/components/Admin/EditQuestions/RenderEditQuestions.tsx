import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'

import { QuestionSelect } from '../Select'

const RenderEditQuestions = () => {
  const { t: _ } = useTranslation()

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
        <QuestionSelect />
      </Box>

      <Outlet />
    </Box>
  )
}

export default RenderEditQuestions
