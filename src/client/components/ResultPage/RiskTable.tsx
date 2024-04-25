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
import { Result } from '@backend/types'

import useCountry from '../../hooks/useCountryData'

import RiskElement from './RiskElement'

import styles from '../../styles'
import { RiskData } from '../../types'
import CountryRisks from './CountryRisks'
import { globalNorthCountries } from '../../util/countryLists'

const { resultStyles } = styles

const RiskTable = ({
  selectedCountryCode,
  results,
  riskData,
}: {
  selectedCountryCode: string | undefined
  results: Result[]
  riskData: RiskData
}) => {
  const { t } = useTranslation()
  const { country } = useCountry(selectedCountryCode)

  if (!riskData) return null

  const totalRisk = riskData.risks.find((risk) => risk.id === 'total')

  if (!totalRisk) return null

  let totalRiskText = totalRisk.infoText

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
                resultText={totalRisk.title}
                risk={totalRisk.level}
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
                    risk={riskData.risks[0].level}
                    infoText={countryInfoText}
                  />
                  <CountryRisks
                    country={country}
                    results={results}
                    resultData={riskData.answers}
                  />
                </>
              )}
              {riskData.risks.map(
                (risk) =>
                  risk.id !== 'country' && (
                    <RiskElement
                      key={risk.id}
                      resultText={risk.title}
                      risk={risk.level}
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
