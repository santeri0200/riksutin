import React from 'react'
import { Controller } from 'react-hook-form'
import { Autocomplete, Box, TextField } from '@mui/material'

import { useTranslation } from 'react-i18next'

import { Locales } from '@backend/types'

import { useHighRiskCountries } from '../../hooks/useCountries'
import { InputProps } from '../../types'

const HighRiskCountrySelect = ({ control, question, children }: InputProps) => {
  const { countries } = useHighRiskCountries()

  const { t, i18n } = useTranslation()
  const { language } = i18n

  if (!question || !countries) return null

  return (
    <>
      <Controller
        control={control}
        name={question.id.toString()}
        defaultValue=""
        rules={{
          required: { value: true, message: t('questions:requiredText') },
        }}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <Box justifyContent="center">
            <Autocomplete
              multiple
              disablePortal
              id={`select-${question.id.toString()}`}
              options={
                // eslint-disable-next-line no-nested-ternary
                countries.map((country) => country.name)
              }
              getOptionLabel={(option) => option}
              onChange={(e, data) => onChange(data)}
              sx={{ width: '50%' }}
              renderInput={(params) => (
                <TextField
                  helperText={error ? error.message : null}
                  error={!!error}
                  {...params}
                  label={
                    question.optionData.label
                      ? question.optionData.label[language as keyof Locales]
                      : ''
                  }
                />
              )}
            />
          </Box>
        )}
      />
      {children}
    </>
  )
}

export default HighRiskCountrySelect
