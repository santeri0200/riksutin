import React from 'react'

import { Control, Controller } from 'react-hook-form'
import { Box, Button, TextField, Autocomplete } from '@mui/material'

import { InputProps } from '../../types'
import useOrganisations from '../../hooks/useOrganisations'
import LoadingProgress from '../Common/LoadingProgress'

const OrganisationList = ({
  inputOrganisation,
  questionId,
  control,
}: {
  inputOrganisation: string
  questionId: string
  control: Control<any> | undefined
}) => {
  const { organisations = [] } = useOrganisations(inputOrganisation)

  return !organisations ? (
    <LoadingProgress />
  ) : (
    <>
      <p>Valitse organisaatiosi listalta</p>

      <Controller
        control={control}
        name="select-organisation"
        defaultValue=""
        render={({ field: { onChange } }) => (
          <Box justifyContent="center">
            <Autocomplete
              disablePortal
              id={`select-${questionId}`}
              options={organisations}
              getOptionLabel={(option) => option}
              onChange={(e, data) => onChange(data)}
              sx={{ width: '50%' }}
              renderInput={(params) => (
                <TextField {...params} label="organisaatio" />
              )}
            />
          </Box>
        )}
      />
    </>
  )
}

const OrganisationSelect = ({
  control,
  question,
  children,
  watch,
}: InputProps) => {
  const [buttonClicked, setButtonClicked] = React.useState(false)

  if (!question || !watch) return null

  return (
    <>
      <Controller
        control={control}
        name={question.id.toString()}
        defaultValue=""
        render={({ field: { onChange } }) => (
          <Box justifyContent="center">
            <TextField
              data-testid={`question-${question.id}`}
              onChange={onChange}
            />
          </Box>
        )}
      />
      <Button type="button" onClick={() => setButtonClicked(true)}>
        Etsi
      </Button>
      {buttonClicked && (
        <OrganisationList
          inputOrganisation={watch(question.id.toString())}
          questionId={question.id.toString()}
          control={control}
        />
      )}

      {children}
    </>
  )
}

export default OrganisationSelect
