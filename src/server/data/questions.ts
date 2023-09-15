import countries from './countries.json'
import { Question } from '../types'

const countryNames = countries
  .map((country: { name: { common: string } }) => country.name.common)
  .sort()

const getQuestionData = (): Question[] => [
  {
    id: 1,
    surveyId: 1,
    parentId: null,
    priority: 0,
    title: {
      fi: 'Nimi',
      sv: 'Namn',
      en: 'Name',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: { type: 'text', options: [] },
    visibility: {},
  },
  {
    id: 2,
    surveyId: 1,
    parentId: null,
    priority: 0,
    title: {
      fi: 'Yksikkö',
      sv: 'Yksikkö',
      en: 'Yksikkö',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: { type: 'text', options: [] },
    visibility: {},
  },
  {
    id: 3,
    surveyId: 1,
    parentId: null,
    priority: 0,
    title: {
      fi: 'Yhteistyöprojektin nimi',
      sv: 'Yhteistyöprojektin nimi',
      en: 'Yhteistyöprojektin nimi',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: { type: 'text', options: [] },
    visibility: {},
  },
  {
    id: 4,
    surveyId: 1,
    parentId: null,
    priority: 0,
    title: {
      fi: 'Yhteistyöprojektin kumppanin nimi',
      sv: 'Yhteistyöprojektin kumppanin nimi',
      en: 'Yhteistyöprojektin kumppanin nimi',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: { type: 'text', options: [] },
    visibility: {},
  },
  {
    id: 5,
    surveyId: 1,
    parentId: null,
    priority: 0,
    title: {
      fi: 'Yhteistyökumppanin sijaintimaa',
      sv: 'Yhteistyökumppanin sijaintimaa',
      en: 'Yhteistyökumppanin sijaintimaa',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: { type: 'select', options: countryNames },
    visibility: {},
  },
  {
    id: 6,
    surveyId: 1,
    parentId: null,
    priority: 0,
    title: {
      fi: 'Yhteistyökumppanin tyyppi',
      sv: 'Yhteistyökumppanin tyyppi',
      en: 'Yhteistyökumppanin tyyppi',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'select',
      options: ['Yliopisto', 'Tutkimuslaitos', 'Yritys', 'Kansalaisjärjestö'],
    },
    visibility: {},
  },
  {
    id: 7,
    surveyId: 1,
    parentId: null,
    priority: 0,
    title: {
      fi: 'Projektin lyhyt kuvaus',
      sv: 'Projektin lyhyt kuvaus',
      en: 'Projektin lyhyt kuvaus',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: { type: 'text', options: [] },
    visibility: {},
  },
  {
    id: 8,
    surveyId: 1,
    parentId: null,
    priority: 0,
    title: {
      fi: 'Helsingin yliopiston asema projektissa',
      sv: 'Helsingin yliopiston asema projektissa',
      en: 'Helsingin yliopiston asema projektissa',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'select',
      options: [
        'Koordinaattori',
        'Partneri',
        'Tasaveroinen kumppani',
        'Alihankkija',
      ],
    },
    visibility: {},
  },
  {
    id: 9,
    surveyId: 1,
    parentId: null,
    priority: 1,
    title: {
      fi: 'Kirjallinen sopimus',
      sv: 'Kirjallinen sopimus',
      en: 'Kirjallinen sopimus',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'yes',
          label: 'yes',
          title: {
            fi: 'Kyllä',
            sv: 'Kyllä',
            en: 'Kyllä',
          },
        },
        {
          id: 'no',
          label: 'no',
          title: {
            fi: 'Ei',
            sv: 'Ei',
            en: 'Ei',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 10,
    surveyId: 1,
    parentId: null,
    priority: 2,
    title: {
      fi: 'Yhteistyön muodot',
      sv: 'Yhteistyön muodot',
      en: 'Yhteistyön muodot',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'multipleChoice',
      options: [
        {
          id: 'option1',
          label: 'option1',
          title: {
            fi: 'Tutkimus',
            sv: 'Tutkimus',
            en: 'Tutkimus',
          },
        },
        {
          id: 'option2',
          label: 'option2',
          title: {
            fi: 'Koulutus',
            sv: 'Koulutus',
            en: 'Koulutus',
          },
        },
        {
          id: 'option3',
          label: 'option3',
          title: {
            fi: 'Koulutusvienti',
            sv: 'Koulutusvienti',
            en: 'Koulutusvienti',
          },
        },
        {
          id: 'option4',
          label: 'option4',
          title: {
            fi: 'Kansainvälinen opiskelijaliikkuvuus',
            sv: 'Kansainvälinen opiskelijaliikkuvuus',
            en: 'Kansainvälinen opiskelijaliikkuvuus',
          },
        },
        {
          id: 'option5',
          label: 'option5',
          title: {
            fi: 'Kansainvälinen henkilöstöliikkuvuus',
            sv: 'Kansainvälinen henkilöstöliikkuvuus',
            en: 'Kansainvälinen henkilöstöliikkuvuus',
          },
        },
        {
          id: 'option6',
          label: 'option6',
          title: {
            fi: 'Yhteistutkinto',
            sv: 'Yhteistutkinto',
            en: 'Yhteistutkinto',
          },
        },
        {
          id: 'option7',
          label: 'option7',
          title: {
            fi: 'Etäkampus',
            sv: 'Etäkampus',
            en: 'Etäkampus',
          },
        },
      ],
    },
    visibility: {},
  },
]

export default getQuestionData
