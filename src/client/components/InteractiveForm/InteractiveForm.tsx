import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'
import { Box, Grid } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'
import usePersistForm from '../../hooks/usePersistForm'
import useSaveEntryMutation from '../../hooks/useSaveEntryMutation'

import HelloBanner from './HelloBanner'
import RenderSurvey from './RenderSurvey'
import Recommendations from '../Recommendations/Recommendations'
import Results from '../ResultPage/Results'

import { useResultData } from '../../contexts/ResultDataContext'

import styles from '../../styles'
import { FormValues } from '../../types'
import { FORM_DATA_KEY, LOCATION_KEY } from '../../../config'

const InteractiveForm = () => {
  const { survey, isLoading } = useSurvey()
  const { t } = useTranslation()
  const mutation = useSaveEntryMutation(survey?.id)

  const sessionLocation = sessionStorage.getItem(LOCATION_KEY)
  const [showResults, setShowResults] = useState(sessionLocation === 'results')

  const { resultData, setResultData } = useResultData()

  const { formStyles } = styles

  const {
    formState: { isSubmitted },
    handleSubmit,
    control,
    watch,
  } = useForm({
    mode: 'onBlur',
    shouldUnregister: true,
    defaultValues: resultData,
  })

  const onSubmit = (data: FormValues) => {
    const submittedData = data

    setResultData(submittedData)
    mutation
      .mutateAsync(submittedData)
      .then(() => {
        sessionStorage.setItem(LOCATION_KEY, 'results')
        setShowResults(true)

        document
          ?.getElementById('survey-main-section')
          ?.scrollIntoView({ behavior: 'smooth' })
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        enqueueSnackbar(t('common:submitError'), { variant: 'error' })
      })
  }

  usePersistForm({ value: watch(), sessionStorageKey: FORM_DATA_KEY })

  if (!survey || isLoading) return null

  return (
    <Box sx={formStyles.formWrapper}>
      <Grid container>
        <Grid item sm={12}>
          <HelloBanner />
        </Grid>
        <Grid
          id="survey-main-section"
          sx={{ px: 2, maxWidth: '100vw' }}
          item
          sm={12}
          md={7}
          xl={8}
        >
          <form
            style={{ display: showResults ? 'none' : 'block' }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <RenderSurvey
              questions={survey.Questions}
              control={control}
              watch={watch}
              isSubmitted={isSubmitted}
            />
          </form>

          {resultData && showResults && (
            <Results setShowResults={setShowResults} />
          )}
        </Grid>
        <Grid item sm={12} md={5} xl={4}>
          <Recommendations />
        </Grid>
      </Grid>
    </Box>
  )
}

export default InteractiveForm
