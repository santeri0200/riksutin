/* eslint-disable react/require-default-props */
import React from 'react'
import { Box, TableCell, TableRow } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Markdown from '../Common/Markdown'

import styles from '../../styles'

const { resultStyles, riskColors } = styles

export interface RiskElementProps {
  infoText?: string | null | undefined
  resultText: string
  risk: number | null
  style?: any
}

const RiskElement = ({
  infoText,
  resultText,
  risk,
  style,
}: RiskElementProps) => {
  const { t } = useTranslation()
  if (!risk) return null

  return (
    <TableRow>
      <TableCell width="30%">
        <Box sx={style}>
          <Markdown>{t(resultText)}</Markdown>
        </Box>
      </TableCell>
      <TableCell>
        <Box
          sx={[
            {
              backgroundColor: riskColors[risk > 3 ? 3 : risk],
            },
            resultStyles.tableCell,
          ]}
        >
          {risk > 3 ? 3 : risk}
        </Box>
      </TableCell>
      {infoText && (
        <TableCell sx={{ width: '90%' }}>
          <Markdown>{infoText}</Markdown>
        </TableCell>
      )}
    </TableRow>
  )
}

export default RiskElement
