import React from 'react'
import { Box, TableCell, TableRow, Typography } from '@mui/material'
import Markdown from '../Common/Markdown'

import styles from '../../styles'

const { resultStyles } = styles

export interface RiskElementProps {
  // eslint-disable-next-line react/require-default-props
  infoText?: string
  resultText: string
  risk: number
}

const RiskElement = ({ infoText, resultText, risk }: RiskElementProps) => {
  const colors: any = {
    1: '#2ecc71',
    2: '#f1c40f',
    3: '#e74c3c',
  }
  return (
    <TableRow>
      <TableCell>
        <Typography variant="body1">{resultText}</Typography>
      </TableCell>
      <TableCell>
        <Box
          sx={[
            {
              backgroundColor: colors[risk],
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
