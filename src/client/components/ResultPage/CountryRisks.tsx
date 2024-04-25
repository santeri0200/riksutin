import React from 'react'

import RiskElement from './RiskElement'
import { Risk } from '../../types'

const CountryRisks = ({ countryRisks }: { countryRisks: Risk[] }) => {
  if (!countryRisks) return null

  return (
    <>
      {countryRisks.map((risk: Risk) => (
        <RiskElement
          key={risk.id}
          level={risk.level}
          title={risk.title}
          infoText={risk.infoText}
          style={{ paddingLeft: '30px' }}
        />
      ))}
    </>
  )
}

export default CountryRisks
