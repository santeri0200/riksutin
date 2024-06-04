import React from 'react'
import {
  Box,
  FormControlLabel,
  FormHelperText,
  List,
  ListItem,
  Radio,
  RadioGroup,
} from '@mui/material'

import { useTranslation } from 'react-i18next'
import { Controller } from 'react-hook-form'
import { Locales, SingleChoiceType } from '@backend/types'
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

const ConsortiumSelect = ({
  control,
  question,
  children,
  language,
}: InputProps) => {
  const { t } = useTranslation()

  if (!question) return null

  highRiskCountries.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <Box>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 300,
          '& ul': { padding: 0 },
        }}
      >
        {highRiskCountries.map((country) => (
          <ListItem key={country.code}>{country.name}</ListItem>
        ))}
      </List>
      <Controller
        control={control}
        name={question.id.toString()}
        defaultValue=""
        rules={{
          required: { value: true, message: t('questions:requiredText') },
        }}
        render={({ field, fieldState: { error } }) => (
          <Box justifyContent="center">
            <RadioGroup {...field}>
              {question.optionData.options.map(
                (singleOption: SingleChoiceType) => (
                  <FormControlLabel
                    data-cy={`choice-select-${singleOption.id}`}
                    key={singleOption.id as string}
                    value={singleOption.id}
                    label={singleOption.title[language as keyof Locales]}
                    control={<Radio />}
                  />
                )
              )}
            </RadioGroup>
            <FormHelperText error>
              {error ? error.message : null}
            </FormHelperText>
          </Box>
        )}
      />
      {children}
    </Box>
  )
}

export default ConsortiumSelect
