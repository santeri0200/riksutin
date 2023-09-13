import { Question } from '../types'

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
]

export default getQuestionData
