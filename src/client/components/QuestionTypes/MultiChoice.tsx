import React from 'react'
import { Controller } from 'react-hook-form'
import {
  Box,
  FormControl,
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from '@mui/material'

import { MultipleChoiceType, Locales } from '@backend/types'

import { InputProps } from '../../types'

const MultiChoice = ({ control, question, children, language }: InputProps) => {
  if (!question) return null

  return (
    <>
      <Controller
        name={question.id.toString()}
        control={control}
        defaultValue={[]}
        rules={{ required: { value: true, message: 'required' } }}
        render={({ field, fieldState: { error } }) => (
          <Box>
            <FormControl>
              {(question.optionData.options as MultipleChoiceType[]).map(
                (choice: MultipleChoiceType) => (
                  <FormControlLabel
                    key={choice.id}
                    value={choice.id}
                    control={
                      <Checkbox
                        onChange={() => {
                          if (!field.value.includes(choice.id)) {
                            field.onChange([...field.value, choice.id])
                            return
                          }
                          const newValues = field.value.filter(
                            (c: string) => c !== choice.id
                          )
                          field.onChange(newValues)
                        }}
                      />
                    }
                    label={choice.title[language as keyof Locales]}
                  />
                )
              )}
              <FormHelperText error>
                {error ? error.message : null}
              </FormHelperText>
            </FormControl>
          </Box>
        )}
      />
      {children}
    </>
  )
}

export default MultiChoice
