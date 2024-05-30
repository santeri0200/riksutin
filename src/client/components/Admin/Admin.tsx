import React from 'react'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'

import { Box, Tab, Tabs } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useLoggedInUser from '../../hooks/useLoggedInUser'

const Admin = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const { user, isLoading } = useLoggedInUser()

  if (isLoading) return null

  if (!user || !user.isAdmin) return <Navigate to="/" />

  const pathParts = location.pathname.split('/').filter(Boolean)

  const tab = pathParts.length === 1 ? 'summary' : pathParts[1]

  return (
    <Box
      sx={{
        alignSelf: 'flex-start',
        width: '100%',
        bgcolor: 'background.paper',
        m: 3,
      }}
    >
      <Tabs
        value={tab}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        <Tab
          component={Link}
          to="."
          label={t('admin:summaryTab')}
          value="summary"
        />
        <Tab
          component={Link}
          to="./edit-survey"
          label={t('admin:surveyTab')}
          value="edit-survey"
        />
        <Tab
          component={Link}
          to="./edit-questions"
          label={t('admin:questionTab')}
          value="edit-questions"
        />
      </Tabs>
      <Outlet />
    </Box>
  )
}
export default Admin
