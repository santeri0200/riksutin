import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

import { ResultSelect } from '../Select'

const RenderEditResults = () => (
  <Box sx={{ mx: 2, mt: 8 }}>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        my: 4,
        justifyContent: 'flex-start',
      }}
    >
      <ResultSelect />
    </Box>

    <Outlet />
  </Box>
)

export default RenderEditResults
