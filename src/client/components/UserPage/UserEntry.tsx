import React, { useState } from 'react'
import { TableRow, TableCell, IconButton, Collapse, Box } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import RenderAnswers from '../ResultPage/RenderAnswers'
import { Entry, Survey } from '../../types'

const UserEntry = ({ entry, survey }: { entry: Entry; survey: Survey }) => {
  const [open, setOpen] = useState(false)

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

export default UserEntry
