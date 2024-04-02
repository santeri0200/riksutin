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
import {
  countryRisk,
  universityRisk,
  dualUseRisk,
  organisationRisk,
} from '../../util/risks'

import useCountry from '../../hooks/useCountryData'

import RiskElement from './RiskElement'

import styles from '../../styles'
import { FormValues } from '../../types'
import CountryRisks from './CountryRisks'

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

  const possibleRiskLevels = [0, 1, 2, 3, 4, 5]

  const countryRiskValues = countryRisk({ country, resultData })

  const roleMultiplier = resultData[9] === 'coordinator' ? 1.2 : 1
  const durationMultiplier = resultData[12] === 'longDuration' ? 1.2 : 1
  const agreementMultiplier = resultData[10] === 'agreementNotDone' ? 1.2 : 1
  const previousCollaborationMultiplier =
    resultData[24] === 'noSuccessfulCollaboration' ? 1.2 : 1

  const dualUseRiskValue = dualUseRisk(questions, resultData)

  const organisationRiskValue = organisationRisk(resultData)

  const ethicalRiskValue = questions
    .find((question) => question.id === 25)
    ?.optionData.options.find((o) => o.id === resultData[25])?.risk

  const riskArray = [
    {
      id: 'country',
      text: t('riskTable:countryRiskLevel'),
      riskLevel: countryRiskValues ? countryRiskValues[0] : null,
    },
    {
      id: 'university',
      text: t('riskTable:universityRiskLevel'),
      riskLevel: universityRisk(resultData['20'], resultData['21']),
      infoText: results.find(
        (r) =>
          r.optionLabel ===
          `universityRiskLevel${universityRisk(
            resultData['20'],
            resultData['21']
          )}`
      )?.isSelected[language as keyof Locales],
    },
    {
      id: 'duration',
      text: t('riskTable:durationRiskLevel'),
      riskLevel: questions
        .find((question) => question.id === 12)
        ?.optionData.options.find((o) => o.id === resultData[12])?.risk,
    },
    {
      id: 'dualUse',
      text: t('riskTable:dualUseRiskLevel'),
      riskLevel: dualUseRiskValue,
      infoText: results.find(
        (r) => r.optionLabel === `dualUseRiskLevel${dualUseRiskValue}`
      )?.isSelected[language as keyof Locales],
    },
    {
      id: 'organisation',
      text: t('riskTable:organisationRiskLevel'),
      riskLevel: organisationRiskValue,
      infoText: results.find(
        (r) => r.optionLabel === `organisationRiskLevel${organisationRiskValue}`
      )?.isSelected[language as keyof Locales],
    },
    {
      id: 'economic',
      text: t('riskTable:economicRiskLevel'),
      riskLevel: questions
        .find((question) => question.id === 16)
        ?.optionData.options.find((o) => o.id === resultData[16])?.risk,
    },
    {
      id: 'ethical',
      text: t('riskTable:ethicalRiskLevel'),
      riskLevel: ethicalRiskValue,
      infoText: results.find(
        (r) => r.optionLabel === `ethicalRiskLevel${ethicalRiskValue}`
      )?.isSelected[language as keyof Locales],
    },
  ].filter((value) => possibleRiskLevels.includes(value.riskLevel))

  if (riskArray.length === 0) return null

  const allRisks = (
    riskArray.map((value) => value.riskLevel) as number[]
  ).concat(countryRiskValues ? countryRiskValues[1] : [])

  let totalRisk = Math.round(
    (allRisks.reduce((a, b) => a + b, 0) / allRisks.length) *
      roleMultiplier *
      durationMultiplier *
      agreementMultiplier *
      previousCollaborationMultiplier
  )

  if (allRisks.filter((value) => value === 3).length >= 3) totalRisk = 3

  const totalRiskText = results.find(
    (r) => r.optionLabel === `totalRiskLevel${totalRisk}`
  )?.isSelected[language as keyof Locales]

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
                risk={totalRisk}
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
                    risk={riskArray[0].riskLevel}
                    infoText={
                      selectedCountryCode === 'CN'
                        ? t(`countrySpecificTexts:CN`)
                        : ''
                    }
                  />
                  <CountryRisks
                    country={country}
                    results={results}
                    resultData={resultData}
                  />
                </>
              )}
              {riskArray.map(
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
