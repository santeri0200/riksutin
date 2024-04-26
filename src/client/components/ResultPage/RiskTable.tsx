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

import RiskElement from './RiskElement'

import styles from '../../styles'
import { RiskData } from '../../types'
import CountryRisks from './CountryRisks'
import { globalNorthCountries } from '../../util/countryLists'
import useCountries from '../../hooks/useCountries'

const { resultStyles } = styles

const RiskTable = ({ riskData }: { riskData: RiskData }) => {
  const { t } = useTranslation()
  const { countries, isLoading } = useCountries()

  if (!riskData || !countries || isLoading) return null

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
              {riskData.country && countryRisk && (
                <>
                  <RiskElement
                    title={t('riskTable:countryRiskLevel')}
                    level={riskData.risks[0].level}
                    infoText={countryInfoText}
                  />
                  <CountryRisks countryRisks={riskData.country} />
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
