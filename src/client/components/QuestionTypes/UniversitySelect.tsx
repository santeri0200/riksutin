import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Autocomplete, Box, Button, TextField } from '@mui/material'

import { useTranslation } from 'react-i18next'

import { Locales } from '@backend/types'

import useCountry from '../../hooks/useCountryData'
import { InputProps } from '../../types'
import LoadingProgress from '../Common/LoadingProgress'

const UniversitySelect = ({
  control,
  question,
  selectedCountry,
  children,
}: InputProps) => {
  const { country } = useCountry(selectedCountry)
  const [showChildQuestion, setShowChildQuestion] = useState(false)

  const { t, i18n } = useTranslation()
  const { language } = i18n

  if (!question) return null

  if (!selectedCountry)
    return (
      <Box>
        <i>{t('questions:selectUniversityInfoMessage')}</i>
      </Box>
    )

  return (
    <>
      {!country ? (
        <LoadingProgress />
      ) : (
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
                  options={country?.universities || question.optionData.options}
                  getOptionLabel={(option) => option}
                  onChange={(e, data) => onChange(data)}
                  sx={{ width: '50%' }}
                  renderInput={(params) => (
                    <TextField
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
          <Button onClick={() => setShowChildQuestion(true)}>
            {t('questions:addUniversityManually')}
          </Button>
        </>
      )}

      {showChildQuestion && children}
    </>
  )
}

export default UniversitySelect
