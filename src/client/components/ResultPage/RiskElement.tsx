import React from 'react'
import { Box, TableCell, TableRow, Typography } from '@mui/material'
import Markdown from '../Common/Markdown'

import styles from '../../styles'

const { resultStyles, riskColors } = styles

export interface RiskElementProps {
  // eslint-disable-next-line react/require-default-props
  infoText?: string | null
  resultText: string
  risk: number
}

const RiskElement = ({ infoText, resultText, risk }: RiskElementProps) => (
  <TableRow>
    <TableCell>
      <Typography variant="body1">{resultText}</Typography>
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

export default RiskElement
