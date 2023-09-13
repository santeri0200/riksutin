import React from 'react'
import { Controller } from 'react-hook-form'
import { Box, TextField } from '@mui/material'

import { InputProps } from '../../types'

const Text = ({ control, question, children }: InputProps) => {
  if (!question) return null

  return (
    <>
      <Controller
        control={control}
        name={question.id.toString()}
        defaultValue=""
        render={() => (
          <Box justifyContent="center">
            <TextField />
          </Box>
        )}
      />

      {children}
    </>
  )
}

export default Text
