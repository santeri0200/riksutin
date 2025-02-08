/* eslint-disable react/require-default-props */
import { Box, TableCell, TableRow } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Markdown from '../Common/Markdown'

import styles from '../../styles'

const { resultStyles, riskColors } = styles

export interface RiskElementProps {
  infoText?: string | null | undefined
  title: string
  level: number | null
  style?: any
}

const RiskElement = ({ infoText, title, level, style }: RiskElementProps) => {
  const { t } = useTranslation()
  if (!level) return null

  return (
    <TableRow>
      <TableCell width="30%">
        <Box sx={style}>
          <Markdown>{t(title)}</Markdown>
        </Box>
      </TableCell>
      <TableCell>
        <Box
          sx={[
            {
              backgroundColor: riskColors[level > 3 ? 3 : level],
            },
            resultStyles.tableCell,
          ]}
        >
          {level > 3 ? 3 : level}
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
