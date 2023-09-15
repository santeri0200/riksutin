import React from 'react'
import { Controller } from 'react-hook-form'
import { Autocomplete, Box, TextField } from '@mui/material'

import { InputProps } from '../../types'

const DropDownSelect = ({ control, question, children }: InputProps) => {
  if (!question) return null

  return (
    <>
      <Controller
        control={control}
        name={question.id.toString()}
        defaultValue=""
        render={() => (
          <Box justifyContent="center">
            <Autocomplete
              disablePortal
              id={`select-${question.id.toString()}`}
              options={question.optionData.options}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        )}
      />

      {children}
    </>
  )
}

export default DropDownSelect
