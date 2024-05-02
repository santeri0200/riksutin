import React from 'react'
import { Controller } from 'react-hook-form'
import { Box, TextField } from '@mui/material'

import { InputProps } from '../../types'

const Text = ({ control, question, defaultValue }: InputProps) => {
  if (!question) return null

  const props = question.optionData.options.find(({ attributes }) => attributes)

  return (
    <Controller
      control={control}
      name={question.id.toString()}
      defaultValue={defaultValue}
      rules={{ required: question.id !== 7 }}
      render={({ field: { onChange } }) => (
        <Box justifyContent="center">
          <TextField
            data-testid={`question-${question.id}`}
            onChange={onChange}
            fullWidth
            InputProps={props ? props.attributes : {}}
            defaultValue={defaultValue}
          />
        </Box>
      )}
    />
  )
}

export default Text
