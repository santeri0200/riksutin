import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Button,
  Autocomplete,
  TextField,
  Container,
  Typography,
} from '@mui/material'

import { Controller } from 'react-hook-form'
import RenderQuestions from './RenderQuestions'
import SurveyButtons from '../Common/SurveyButtons'
import RenderSelections from './RenderSelections'

import { useResultData } from '../../contexts/ResultDataContext'

import { InputProps } from '../../types'
import styles from '../../styles'
import countries from '../../../server/data/countries.json'

const RenderSurvey = ({
  questions,
  control,
  watch,
  isSubmitted,
}: InputProps) => {
  const { t, i18n } = useTranslation()

  const countryNames = countries.map((country) => country.name.common).sort()

  const { resultData } = useResultData()
  const [showQuestions, setShowQuestions] = useState(Boolean(resultData))

  if (!questions || !watch) return null

  const { cardStyles, formStyles } = styles

  const { language } = i18n

  return (
    <Box sx={cardStyles.outerBox}>
      <RenderSelections control={control} />

      <Box sx={cardStyles.card}>
        {questions.map((question) => (
          <div key={question.id}>
            {showQuestions && question.parentId === null && (
              <RenderQuestions
                control={control}
                watch={watch}
                question={question}
                questions={questions}
                language={language}
              />
            )}
          </div>
        ))}
        <Box sx={formStyles.stackBox}>
          <Container sx={cardStyles.questionsContainer}>
            <Box sx={cardStyles.content}>
              <Typography>Yhteistyökumppanin sijaintimaa</Typography>
            </Box>
            <Controller
              control={control}
              name="country"
              defaultValue=""
              render={({ field: { onChange } }) => (
                <Box justifyContent="center">
                  <Autocomplete
                    disablePortal
                    id="select-1"
                    options={countryNames}
                    getOptionLabel={(option) => option}
                    onChange={(e, data) => onChange(data)}
                    sx={{ width: 250 }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Box>
              )}
            />
          </Container>
        </Box>
        <Box sx={formStyles.stackBox}>
          <Container sx={cardStyles.questionsContainer}>
            <Box sx={cardStyles.content}>
              <Typography>Yhteistyökumppanin tyyppi</Typography>
            </Box>
            <Controller
              control={control}
              name="type"
              defaultValue=""
              render={({ field: { onChange } }) => (
                <Box justifyContent="center">
                  <Autocomplete
                    disablePortal
                    id="select-2"
                    options={[
                      'Yliopisto',
                      'Tutkimuslaitos',
                      'Kansalaisjärjestö',
                      'Yritys',
                    ]}
                    getOptionLabel={(option) => option}
                    onChange={(e, data) => onChange(data)}
                    sx={{ width: 250 }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Box>
              )}
            />
          </Container>
        </Box>
        <Box sx={formStyles.stackBox}>
          <Container sx={cardStyles.questionsContainer}>
            <Box sx={cardStyles.content}>
              <Typography>Helsingin yliopiston asema projektissa</Typography>
            </Box>
            <Controller
              control={control}
              name="status"
              defaultValue=""
              render={({ field: { onChange } }) => (
                <Box justifyContent="center">
                  <Autocomplete
                    disablePortal
                    id="select-3"
                    options={[
                      'Koordinaattori',
                      'Partneri',
                      'Tasaveroinen kumppani',
                      'Alihankkija',
                    ]}
                    getOptionLabel={(option) => option}
                    onChange={(e, data) => onChange(data)}
                    sx={{ width: 250 }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Box>
              )}
            />
          </Container>
        </Box>

        <Box sx={formStyles.stackBox}>
          {!showQuestions ? (
            <Button
              data-cy="open-form-button"
              onClick={() => setShowQuestions(true)}
            >
              {t('openForm')}
            </Button>
          ) : (
            <SurveyButtons>
              <Button
                sx={formStyles.stackButton}
                type="submit"
                data-cy="submit-form-button"
                variant="contained"
              >
                {isSubmitted ? t('updateSubmit') : t('submit')}
              </Button>
            </SurveyButtons>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default RenderSurvey
