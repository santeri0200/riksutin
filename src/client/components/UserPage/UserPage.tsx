import React from 'react'
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import useSurvey from '../../hooks/useSurvey'
import { Entry, Survey } from '../../types'
import styles from '../../styles'

import { useUserEntries } from '../../hooks/useEntry'
import RenderAnswers from '../ResultPage/RenderAnswers'

const { formStyles } = styles

const Row = ({ entry, survey }: { entry: Entry; survey: Survey }) => {
  const [open, setOpen] = React.useState(false)

  const date = new Date(entry.createdAt).toLocaleDateString()
  const time = new Date(entry.createdAt).toLocaleTimeString()

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="left">
          {date} {time}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <RenderAnswers survey={survey} resultData={entry.data} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

const UserPage = () => {
  const { entries } = useUserEntries()
  const { survey } = useSurvey()

  if (!survey) return null

  return (
    <Box sx={formStyles.formWrapper}>
      <Box sx={{ margin: '15px' }}>
        <Typography variant="h4">Täytetyt kyselyt</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: '40%' }} aria-label="entry table">
          <TableBody>
            {entries?.map((entry) => (
              <Row key={entry.id} entry={entry} survey={survey} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default UserPage
