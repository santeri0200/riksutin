import React from 'react'
import { Controller } from 'react-hook-form'
import { Box, TextField } from '@mui/material'

import { InputProps } from '../../types'

const Text = ({ control, question, children }: InputProps) => {
  if (!question) return null

  const props = question.optionData.options.find(({ attributes }) => attributes)

  return (
    <>
      <Controller
        control={control}
        name={question.id.toString()}
        defaultValue=""
        render={({ field: { onChange } }) => (
          <Box justifyContent="center">
            <TextField
              onChange={onChange}
              fullWidth
              InputProps={props ? props.attributes : {}}
            />
          </Box>
        )}
      />

      {children}
    </>
  )
}

export default Text
