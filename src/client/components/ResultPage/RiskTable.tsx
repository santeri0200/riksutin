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

import getCountryRisks from '../../util/algorithm/getCountryRisks'
import RiskElement from './RiskElement'

import styles from '../../styles'
import { CountryData, RiskData } from '../../types'
import CountryRisks from './CountryRisks'
import { globalNorthCountries } from '../../util/countryLists'
import useCountries from '../../hooks/useCountries'
import useResults from '../../hooks/useResults'

const { resultStyles } = styles

const RiskTable = ({
  riskData,
  countryData,
}: {
  riskData: RiskData
  countryData: CountryData
}) => {
  const { t, i18n } = useTranslation()
  const { language } = i18n
  const { results } = useResults(1)
  const { countries, isLoading } = useCountries()

  if (!riskData || !countries || isLoading || !results) return null

  const selectedCountry: string = riskData.answers['8']
  const selectedCountryCode = countries.find(
    (country) => country.name === selectedCountry
  )?.code

  const totalRisk = riskData.risks.find((risk) => risk.id === 'total')
  const countryRisk = riskData.risks.find((risk) => risk.id === 'country')

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

  const countryRisksWithTexts = getCountryRisks(
    countryData,
    results,
    riskData.answers,
    language
  )

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
                title={totalRisk.title}
                level={totalRisk.level}
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
              {countryRisksWithTexts && countryRisk && (
                <>
                  <RiskElement
                    title={t('riskTable:countryRiskLevel')}
                    level={riskData.risks[0].level}
                    infoText={countryInfoText}
                  />
                  <CountryRisks countryRisks={countryRisksWithTexts} />
                </>
              )}
              {riskData.risks.map(
                (risk) =>
                  !['country', 'total'].includes(risk.id) && (
                    <RiskElement
                      key={risk.id}
                      title={risk.title}
                      level={risk.level}
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
