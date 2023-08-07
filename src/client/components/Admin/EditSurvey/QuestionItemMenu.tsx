import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material'

import MoreVertIcon from '@mui/icons-material/MoreVert'
import MoveDownIcon from '@mui/icons-material/MoveDown'
import EditIcon from '@mui/icons-material/Edit'

import { Question } from '@backend/types'

interface QuestionMenuProps {
  question: Question
  handleStartPositionChange: () => void
}

const QuestionItemMenu = ({
  question,
  handleStartPositionChange,
}: QuestionMenuProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handlePositionChange = () => {
    setAnchorEl(null)
    handleStartPositionChange()
  }

  const handleEditQuestion = () => {
    setAnchorEl(null)

    navigate({
      pathname: `/admin/edit-questions/${question.id}`,
    })
  }

  return (
    <Box sx={{ position: 'absolute', top: 4, right: 4 }}>
      <IconButton onClick={handleOpenMenu} size="small" sx={{ ml: 2 }}>
        <MoreVertIcon sx={{ width: 20, height: 20 }} />
      </IconButton>
      <Menu
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
      >
        <MenuItem disableRipple onClick={handlePositionChange}>
          <ListItemIcon>
            <MoveDownIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('admin:move')}</ListItemText>
        </MenuItem>
        <MenuItem disableRipple onClick={handleEditQuestion}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t('admin:edit')}</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default QuestionItemMenu
