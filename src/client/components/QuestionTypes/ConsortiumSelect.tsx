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
import { useHighRiskCountries } from '../../hooks/useCountries'

const ConsortiumSelect = ({
  control,
  question,
  children,
  language,
}: InputProps) => {
  const { countries } = useHighRiskCountries()
  const { t } = useTranslation()

  if (!question || !countries) return null

  countries.sort((a, b) => a.name.localeCompare(b.name))

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
        {countries.map((country) => (
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
