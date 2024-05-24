/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import { Box, Button, Tab, Tabs } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import RenderAnswers from '../ResultPage/RenderAnswers'
import RiskTable from '../ResultPage/RiskTable'
import { useEntry } from '../../hooks/useEntry'
import useSurvey from '../../hooks/useSurvey'
import styles from '../../styles'

const { formStyles } = styles

interface TabPanelProps {
  children: React.ReactNode
  index: number
  value: number
}

const formatDate = (dateString: string) =>
  `${new Date(dateString).toLocaleDateString()} ${new Date(
    dateString
  ).toLocaleTimeString()}`

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const UserEntry = () => {
  const { entryId } = useParams()
  const { survey } = useSurvey()
  const { entry } = useEntry(entryId)
  const [tabValue, setTabValue] = useState(0)
  const { t } = useTranslation()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  if (!entry || !survey) return null

  const { answers, country, updatedData } = entry.data

  return (
    <Box sx={formStyles.formWrapper}>
      <Box sx={{ width: '100%', my: 2 }}>
        <Link to="/user" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button variant="outlined">
            <ArrowBackIcon sx={{ mr: 1 }} />
            {t('userPage:backButton')}
          </Button>
        </Link>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChange}>
          <Tab sx={{ color: 'black' }} label={formatDate(entry.createdAt)} />
          {updatedData &&
            updatedData.map((updated, index) => (
              <Tab
                key={index}
                sx={{ color: 'black' }}
                label={formatDate(updated.createdAt)}
              />
            ))}
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <RiskTable riskData={entry.data} countryData={country[0]} />
      </TabPanel>
      {updatedData &&
        updatedData.map((updated, index) => (
          <TabPanel key={index} value={tabValue} index={index + 1}>
            <RiskTable riskData={updated} countryData={country[0]} />
          </TabPanel>
        ))}

      <RenderAnswers survey={survey} resultData={answers} />
    </Box>
  )
}

export default UserEntry
