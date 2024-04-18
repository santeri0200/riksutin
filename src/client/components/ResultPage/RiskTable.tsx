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
import { Question, Result, Locales } from '@backend/types'
import totalRisk from '../../util/algorithm/totalRisk'

import useCountry from '../../hooks/useCountryData'

import RiskElement from './RiskElement'

import styles from '../../styles'
import { FormValues } from '../../types'
import CountryRisks from './CountryRisks'
import { globalNorthCountries } from '../../util/countryLists'

const { resultStyles } = styles

const RiskTable = ({
  selectedCountryCode,
  questions,
  results,
  resultData,
}: {
  selectedCountryCode: string | undefined
  questions: Question[]
  results: Result[]
  resultData: FormValues
}) => {
  const { t, i18n } = useTranslation()
  const { country } = useCountry(selectedCountryCode)

  if (!resultData) return null

  const { language } = i18n

  const { totalRiskLevel, filteredArray } = totalRisk(
    country,
    questions,
    results,
    resultData,
    language
  )

  if (!filteredArray || !totalRiskLevel) return null

  let totalRiskText = results.find(
    (r) => r.optionLabel === `totalRiskLevel${totalRisk}`
  )?.isSelected[language as keyof Locales]

  if (selectedCountryCode === ('RU' || 'BY')) {
    totalRiskText += t(`countrySpecificTexts:RU`)
  }

  let countryInfoText = ''

  if (selectedCountryCode === 'CN') {
    countryInfoText = t(`countrySpecificTexts:CN`)
  } else if (!globalNorthCountries.includes(selectedCountryCode as string)) {
    countryInfoText = t(`countrySpecificTexts:globalSouth`)
  }

  return (
    <>
      <Typography data-cy="result-section-title" variant="h6" component="div">
        {t('results:riskTableTitle')}
      </Typography>
      <Box sx={resultStyles.resultElementWrapper}>
        <TableContainer>
          <Table
            sx={{
              width: '80%',
              '& .MuiTableCell-sizeMedium': {
                padding: '10px',
              },
            }}
          >
            <TableBody>
              <RiskElement
                infoText={totalRiskText}
                resultText={t('riskTable:totalRiskLevel')}
                risk={totalRiskLevel}
              />
              <TableRow>
                <TableCell colSpan={3}>
                  <Box sx={{ paddingTop: '10px', paddingBottom: '10px' }}>
                    <Typography variant="body1">
                      {t('riskTable:multiplierInfoText')}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
              {country && (
                <>
                  <RiskElement
                    resultText={t('riskTable:countryRiskLevel')}
                    risk={filteredArray[0].riskLevel}
                    infoText={countryInfoText}
                  />
                  <CountryRisks
                    country={country}
                    results={results}
                    resultData={resultData}
                  />
                </>
              )}
              {filteredArray.map(
                (risk) =>
                  risk.id !== 'country' && (
                    <RiskElement
                      key={risk.id}
                      resultText={risk.text}
                      risk={risk.riskLevel}
                      infoText={risk.infoText}
                    />
                  )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default RiskTable
