import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'
import { Question, Result } from '@backend/types'
import { countryRisk, universityRisk } from '../../util/risks'

import useCountry from '../../hooks/useCountryData'
import { useResultData } from '../../contexts/ResultDataContext'

import CountryResults from './CountryResults'

const TotalRisk = ({
  selectedCountryCode,
  questions,
  results,
}: {
  selectedCountryCode: string | undefined
  questions: Question[]
  results: Result[]
}) => {
  const { t } = useTranslation()
  const { resultData } = useResultData()
  const { country } = useCountry(selectedCountryCode)

  if (!resultData) return null

  const possibleRiskLevels = [0, 1, 2, 3, 4, 5]

  const fundingRisk = questions
    .filter((question) => [14, 15].includes(question.id))
    ?.map(
      (question) =>
        question.optionData.options.find(
          (o) => o.id === resultData[question.id]
        )?.risk
    )
    .reduce((a, b) => a * b, 1)

  const funderRisk = questions
    .find((question) => question.id === 13)
    ?.optionData.options.find((o) => o.id === resultData[13])?.risk

  const durationRisk = questions
    .find((question) => question.id === 12)
    ?.optionData.options.find((o) => o.id === resultData[12])?.risk

  const riskArray = [
    {
      id: 'country',
      text: t('risks:countryRiskLevel'),
      riskLevel: countryRisk(country),
    },
    {
      id: 'university',
      text: t('risks:universityRiskLevel'),
      riskLevel: universityRisk(resultData['20'], resultData['21']),
    },
    {
      id: 'funder',
      text: t('risks:funderRiskLevel'),
      riskLevel: funderRisk,
    },
    {
      id: 'funding',
      text: t('risks:fundingRiskLevel'),
      riskLevel: fundingRisk,
    },
    {
      id: 'duration',
      text: t('risks:durationRiskLevel'),
      riskLevel: durationRisk,
    },
  ].filter((value) => possibleRiskLevels.includes(value.riskLevel))

  if (riskArray.length === 0) return null

  const totalRisk = Math.round(
    (riskArray.map((value) => value.riskLevel) as number[]).reduce(
      (a, b) => a + b,
      0
    ) / riskArray.length
  )

  const riskCellColors: any = {
    1: '#2ecc71',
    2: '#f1c40f',
    3: '#e74c3c',
  }

  return (
    <TableContainer>
      <Table sx={{ width: '50%' }}>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="body1">
                {t('risks:totalRiskLevel')}
              </Typography>
            </TableCell>
            <TableCell
              align="right"
              sx={{
                backgroundColor: riskCellColors[totalRisk],
                borderRadius: '25%',
              }}
            >
              {totalRisk}
            </TableCell>
          </TableRow>
          {country && (
            <>
              <TableRow>
                <TableCell>
                  <Typography variant="body1">
                    {t('risks:countryRiskLevel')}
                  </Typography>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    backgroundColor:
                      riskCellColors[riskArray[0].riskLevel as number],
                    borderRadius: '25%',
                  }}
                >
                  {riskArray[0].riskLevel}
                </TableCell>
              </TableRow>
              {riskArray[0].riskLevel === 1 ? (
                <Box sx={{ m: 2, width: '500px', paddingLeft: '20px' }}>
                  {t('risks:noRisk')}
                </Box>
              ) : (
                <CountryResults country={country} results={results} />
              )}
            </>
          )}
          {riskArray.map(
            (risk) =>
              risk.riskLevel === 3 &&
              risk.id !== 'country' && (
                <TableRow key={risk.id}>
                  <TableCell>
                    <Typography variant="body1">{risk.text}</Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      backgroundColor: riskCellColors[risk.riskLevel as number],
                      borderRadius: '25%',
                    }}
                  >
                    {risk.riskLevel}
                  </TableCell>
                </TableRow>
              )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TotalRisk
