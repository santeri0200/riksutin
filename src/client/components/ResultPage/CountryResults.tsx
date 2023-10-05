import React from 'react'

import { Box } from '@mui/material'
import useCountry from '../../hooks/useCountryData'

const CountryResults = ({ selectedCountryCode }: any) => {
  const { country } = useCountry(selectedCountryCode)
  return (
    <>
      <Box>{country?.corruption}</Box>
      <Box>{country?.stability}</Box>
      <Box>{country?.hci}</Box>
    </>
  )
}

export default CountryResults
