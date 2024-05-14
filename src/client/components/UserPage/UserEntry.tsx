/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'

import { useParams } from 'react-router-dom'
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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
  }

  if (!entry || !survey) return null

  const { answers, risks, country } = entry.data

  return (
    <Box sx={formStyles.formWrapper}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChange}>
          {country.map((countryData, index) => (
            <Tab
              key={index}
              sx={{ color: 'black' }}
              label={formatDate(countryData.createdAt || entry.createdAt)}
            />
          ))}
        </Tabs>
      </Box>
      {risks &&
        country &&
        country.map((countryData, index) => (
          <TabPanel key={index} value={tabValue} index={index}>
            <RiskTable
              key={index}
              riskData={entry.data}
              countryData={countryData}
            />
          </TabPanel>
        ))}
      <RenderAnswers survey={survey} resultData={answers} />
    </Box>
  )
}

export default UserEntry
