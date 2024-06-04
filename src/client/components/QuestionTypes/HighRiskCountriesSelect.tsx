import React from 'react'
import { Controller } from 'react-hook-form'
import { Autocomplete, Box, TextField } from '@mui/material'

import { useTranslation } from 'react-i18next'

import { Locales } from '@backend/types'

import { InputProps } from '../../types'

const highRiskCountries = [
  { name: 'Afghanistan', code: 'AF' },
  { name: 'Bangladesh', code: 'BD' },
  { name: 'Belarus', code: 'BY' },
  { name: 'Congo, Dem. Rep.', code: 'CD' },
  { name: 'Egypt, Arab Rep.', code: 'EG' },
  { name: 'Guinea', code: 'GN' },
  { name: 'Guatemala', code: 'GT' },
  { name: 'Haiti', code: 'HT' },
  { name: 'Iran, Islamic Rep.', code: 'IR' },
  { name: 'Lebanon', code: 'LB' },
  { name: 'Moldova', code: 'MD' },
  { name: 'Madagascar', code: 'MG' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Mali', code: 'ML' },
  { name: 'Myanmar', code: 'MM' },
  { name: 'Mozambique', code: 'MZ' },
  { name: 'Niger', code: 'NE' },
  { name: 'Nigeria', code: 'NG' },
  { name: 'Nicaragua', code: 'NI' },
  { name: 'Pakistan', code: 'PK' },
  { name: 'Sudan', code: 'SD' },
  { name: 'Tunisia', code: 'TN' },
  { name: 'Turkiye', code: 'TR' },
  { name: 'Uganda', code: 'UG' },
  { name: 'Ukraine', code: 'UA' },
  { name: 'Venezuela, RB', code: 'VE' },
  { name: 'Yemen, Rep.', code: 'YE' },
  { name: 'Zimbabwe', code: 'ZW' },
]

const HighRiskCountrySelect = ({ control, question, children }: InputProps) => {
  const { t, i18n } = useTranslation()
  const { language } = i18n

  if (!question) return null

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
                highRiskCountries.map((country) => country.name)
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
