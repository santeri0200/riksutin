/* eslint-disable react/require-default-props */
import React from 'react'
import { Box, TableCell, TableRow, Typography } from '@mui/material'
import Markdown from '../Common/Markdown'

import styles from '../../styles'

const { resultStyles, riskColors } = styles

export interface RiskElementProps {
  infoText?: string | null
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
  if (!risk) return null

  return (
    <TableRow>
      <TableCell width="30%">
        <Typography variant="body1">
          <Box sx={style}>
            <Markdown>{resultText}</Markdown>
          </Box>
        </Typography>
      </TableCell>
      <TableCell>
        <Box
          sx={[
            {
              backgroundColor: riskColors[risk],
            },
            resultStyles.tableCell,
          ]}
        >
          {risk}
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
