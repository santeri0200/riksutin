import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Markdown from '../Common/Markdown'

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
    <Box sx={{ paddingBottom: '10px', paddingLeft: '20px' }}>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="baseline"
        justifyContent="space-between"
      >
        <Grid item>
          <Box>
            <Typography variant="body1">{resultText}</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '50px',
              backgroundColor: colors[risk],
              width: '40px',
              borderRadius: '25%',
            }}
          >
            {risk}
          </Box>
        </Grid>
      </Grid>
      {infoText && (
        <Box sx={{ width: '90%' }}>
          <Markdown>{infoText}</Markdown>
        </Box>
      )}
    </Box>
  )
}

export default RiskElement
