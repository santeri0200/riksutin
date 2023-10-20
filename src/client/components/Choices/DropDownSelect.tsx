import React from 'react'
import { Controller } from 'react-hook-form'
import { Autocomplete, Box, TextField } from '@mui/material'

import useCountry from '../../hooks/useCountryData'
import { InputProps } from '../../types'

const DropDownSelect = ({
  control,
  question,
  children,
  selectedCountry,
}: InputProps) => {
  const { country } = useCountry(selectedCountry)

  if (!question) return null

  return (
    <>
      <Controller
        control={control}
        name={question.id.toString()}
        defaultValue=""
        render={({ field: { onChange } }) => (
          <Box justifyContent="center">
            <Autocomplete
              disablePortal
              id={`select-${question.id.toString()}`}
              options={
                question.id === 20 && country?.universities
                  ? country?.universities
                  : question.optionData.options
              }
              getOptionLabel={(option) => option}
              onChange={(e, data) => onChange(data)}
              sx={{ width: '50%' }}
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
