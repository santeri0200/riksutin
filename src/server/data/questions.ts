import { Question } from '../types'
import getCountries from './worldbank/countries'

const getCountryNames = async () => {
  const countries = await getCountries()
  const countryNames = countries.map(({ name }) => name).sort()

  return countryNames
}

const getQuestionData = async (): Promise<Question[]> => [
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
    priority: 1,
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
    priority: 2,
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
    priority: 4,
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
    priority: 3,
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
    id: 6,
    surveyId: 1,
    parentId: null,
    priority: 9,
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
    id: 7,
    surveyId: 1,
    parentId: null,
    priority: 7,
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
  {
    id: 8,
    surveyId: 1,
    parentId: 7,
    priority: 0,
    title: {
      fi: 'Liikkuvuuden täsmennys',
      sv: 'Liikkuvuuden täsmennys',
      en: 'Liikkuvuuden täsmennys',
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
          id: 'childOption1',
          label: 'childOption1',
          title: {
            fi: 'Vaihtoehto A',
            sv: 'Alternativ A',
            en: 'Option A',
          },
        },
        {
          id: 'childOption2',
          label: 'childOption2',
          title: {
            fi: 'Vaihtoehto B',
            sv: 'Alternativ B',
            en: 'Option B',
          },
        },
      ],
    },
    visibility: { options: ['option4', 'option5'] },
  },
  {
    id: 9,
    surveyId: 1,
    parentId: null,
    priority: 5,
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
    id: 10,
    surveyId: 1,
    parentId: null,
    priority: 8,
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
    id: 11,
    surveyId: 1,
    parentId: null,
    priority: 6,
    title: {
      fi: 'Yhteistyökumppanin sijaintimaa',
      sv: 'Yhteistyöprojektin sijaintimaa',
      en: 'Yhteistyöprojektin sijaintimaa',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: { type: 'select', options: await getCountryNames() },
    visibility: {},
  },
]

export default getQuestionData
