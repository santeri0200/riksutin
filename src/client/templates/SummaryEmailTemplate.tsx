import React from 'react'

import { Locales } from '@backend/types'

const SummaryEmailTemplate = ({ language }: { language: keyof Locales }) => {
  if (language === 'en') {
    return (
      <div>
        <p>Hello</p>

        <p>
          Thank you for using the International collaboration risk assessment
          app. Here is the summary of your choices.
        </p>

        <p>**********</p>
        <br />
      </div>
    )
  }

  return (
    <div>
      <p>Hei</p>

      <p>
        Kiitos Kansainvälisen yhteistyön riskiarviosovelluksen käytöstä! Alla
        yhteenveto valinnoistasi.
      </p>

      <p>**********</p>
      <br />
    </div>
  )
}

export default SummaryEmailTemplate
