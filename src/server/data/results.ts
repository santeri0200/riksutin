import { Result } from '../types'

const getResultData = (): Result[] => [
  {
    id: 1,
    surveyId: 1,
    optionLabel: 'option1',
    isSelected: {
      fi: 'Olet valinnut vaihtoehdon 1 kysymykseen "Kysymys valinnasta".',
      sv: 'Du har valt alternativ 1 för frågan "Fråga om val".',
      en: 'You have selected Option 1 for the "Choice Question".',
    },
    data: {
      allDimensions: {
        fi: 'Tämä on esimerkki tulostekstistä, joka näkyy tulossivulla mustilla reunoilla. Tähän voi kirjoittaa laajan tuloksen tai lopputuloksen tekstin.',
        sv: 'Det här är ett exempel på resultattext som visas på resultatssidan med svarta ramar. Här kan du skriva en bred resultattext eller slutresultattext.',
        en: 'This is an example of result text that will be displayed on the results page with black borders. You can write a comprehensive result or outcome text here.',
      },
    },
  },
  {
    id: 2,
    surveyId: 1,
    optionLabel: 'option2',
    isSelected: {
      fi: 'Olet valinnut vaihtoehdon 2 kysymykseen "Kysymys valinnasta".',
      sv: 'Du har valt alternativ 2 för frågan "Fråga om val".',
      en: 'You have selected Option 2 for the "Choice Question".',
    },
    data: {
      allDimensions: {
        fi: 'Kenttä tukee myös Markdown-sisältöä, joten tässä on hyvä antaa myös linkkejä ulkopuolisiin tietolähteisiin jne.',
        sv: 'Fältet stöder också Markdown-innehåll, så känn dig fri att lägga till länkar till externa källor, osv.',
        en: 'The field also supports Markdown content, so feel free to provide links to external sources, etc.',
      },
    },
  },
  {
    id: 3,
    surveyId: 1,
    optionLabel: 'option3',
    isSelected: {
      fi: 'Olet valinnut vaihtoehdon 3 kysymykseen "Monivalintakysymys".',
      sv: 'Du har valt alternativ 3 för frågan "Fråga med flera val".',
      en: 'You have selected Option 3 for the "Multiple Choice Question".',
    },
    data: {
      allDimensions: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 4,
    surveyId: 1,
    optionLabel: 'childOption1',
    isSelected: {
      fi: 'Olet valinnut vaihtoehdon A kysymykseen "Lapsikysymys".',
      sv: 'Du har valt alternativ A för frågan "Barnfråga".',
      en: 'You have selected Option A for the "Child Question".',
    },
    data: {
      allDimensions: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
  {
    id: 5,
    surveyId: 1,
    optionLabel: 'childOption3',
    isSelected: {
      fi: 'Olet valinnut vaihtoehdon 1 kysymykseen "Sisennetty Lapsikysymys".',
      sv: 'Du har valt alternativ 1 för frågan "Inkurerad Barnfråga".',
      en: 'You have selected Option 1 for the "Indented Child Question".',
    },
    data: {
      allDimensions: {
        fi: '',
        sv: '',
        en: '',
      },
    },
  },
]

export default getResultData
