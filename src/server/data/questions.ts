import { Question } from '../types'

const getQuestionData = async (): Promise<Question[]> => [
  {
    id: 1,
    surveyId: 1,
    parentId: null,
    priority: 0,
    title: {
      fi: 'Ilmoittajan nimi',
      sv: 'Name of the person providing information',
      en: 'Name of the person providing information',
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
      fi: 'Yhteistyön vastuuyksikkö HY:ssa',
      sv: 'UH unit responsible for collaboration',
      en: 'UH unit responsible for collaboration',
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
      fi: 'Yhteistyön/yhteistyöprojektin nimi',
      sv: 'Name of the collaboration/project',
      en: 'Name of the collaboration/project',
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
    priority: 3,
    title: {
      fi: 'Yhteistyökonsortion koostumus',
      sv: 'Composition of consortium',
      en: 'Composition of consortium',
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
          id: 'bilateral',
          label: 'bilateral',
          title: {
            fi: 'Kahdenvälinen',
            sv: 'Bilateral',
            en: 'Bilateral',
          },
        },
        {
          id: 'multilateral',
          label: 'multilateral',
          title: {
            fi: 'Monenkeskeinen',
            sv: 'Multilateral',
            en: 'Multilateral',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 5,
    surveyId: 1,
    parentId: null,
    priority: 4,
    title: {
      fi: 'Yhteistyöorganisaation nimi',
      sv: 'Name of the partner organisation',
      en: 'Name of the partner organisation',
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
    priority: 6,
    title: {
      fi: 'Yhteistyöorganisaation tyyppi',
      sv: 'Type of the partner organisation',
      en: 'Type of the partner organisation',
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
          id: 'university',
          label: 'university',
          title: {
            fi: 'Yliopisto',
            sv: 'University',
            en: 'University',
          },
        },
        {
          id: 'otherResearchOrg',
          label: 'otherResearchOrg',
          title: {
            fi: 'Muu tutkimuslaitos',
            sv: 'Other Research Organisation',
            en: 'Other Research Organisation',
          },
        },
        {
          id: 'company',
          label: 'company',
          title: {
            fi: 'Yritys',
            sv: 'Private company',
            en: 'Private company',
          },
        },
        {
          id: 'ngo',
          label: 'ngo',
          title: {
            fi: 'Kansalaisjärjestö',
            sv: 'NGO',
            en: 'NGO',
          },
        },
        {
          id: 'otherType',
          label: 'otherType',
          title: {
            fi: 'Muu',
            sv: 'Other',
            en: 'Other',
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
    priority: 14,
    title: {
      fi: 'Lisätietoja',
      sv: 'Additional information ',
      en: 'Additional information',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'text',
      options: [
        {
          attributes: {
            multiline: true,
            minRows: 5,
            inputProps: { maxLength: 500 },
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 8,
    surveyId: 1,
    parentId: null,
    priority: 5,
    title: {
      fi: 'Yhteistyökumppanin sijaintimaa',
      sv: 'Home country of partner organisation',
      en: 'Home country of partner organisation',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'select',
      options: [],
      label: {
        fi: 'Valitse sijaintimaa',
        sv: 'Select the country',
        en: 'Select the country',
      },
    },
    visibility: {},
  },
  {
    id: 9,
    surveyId: 1,
    parentId: null,
    priority: 8,
    title: {
      fi: 'Helsingin yliopiston asema yhteistyössä',
      sv: 'Role of UH in collaboration',
      en: 'Role of UH in collaboration',
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
          id: 'coordinator',
          label: 'coordinator',
          title: {
            fi: 'Koordinaattori',
            sv: 'Coordinator',
            en: 'Coordinator',
          },
        },
        {
          id: 'partner',
          label: 'partner',
          title: {
            fi: 'Partneri',
            sv: 'Partner',
            en: 'Partner',
          },
        },
        {
          id: 'equalPartner',
          label: 'equalPartner',
          title: {
            fi: 'Tasaveroinen kumppani',
            sv: 'Equal partner',
            en: 'Equal partner',
          },
        },
        {
          id: 'subcontractor',
          label: 'subcontractor',
          title: {
            fi: 'Alihankkija',
            sv: 'Subcontractor',
            en: 'Subcontractor',
          },
        },
        {
          id: 'otherRole',
          label: 'otherRole',
          title: {
            fi: 'Muu',
            sv: 'Other',
            en: 'Other',
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
    priority: 9,
    title: {
      fi: 'Yhteistyösopimus tekeillä tai tehty',
      sv: 'Written agreement is or will be made',
      en: 'Written agreement is or will be made',
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
          id: 'agreementDone',
          label: 'agreementDone',
          title: {
            fi: 'Kyllä',
            sv: 'Yes',
            en: 'Yes',
          },
        },
        {
          id: 'agreementNotDone',
          label: 'agreementNotDone',
          title: {
            fi: 'Ei',
            sv: 'No',
            en: 'No',
          },
        },
      ],
    },
    visibility: {},
  },

  {
    id: 11,
    surveyId: 1,
    parentId: null,
    priority: 10,
    title: {
      fi: 'Yhteistyön muodot',
      sv: 'Forms of collaboration',
      en: 'Forms of collaboration',
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
          id: 'research',
          label: 'research',
          title: {
            fi: 'Tutkimusyhteistyö',
            sv: 'Research collaboration',
            en: 'Research collaboration',
          },
        },
        {
          id: 'education',
          label: 'education',
          title: {
            fi: 'Koulutus/opetusyhteistyö',
            sv: 'Educational collaboration',
            en: 'Educational collaboration',
          },
        },
        {
          id: 'educationExport',
          label: 'educationExport',
          title: {
            fi: 'Koulutusvienti',
            sv: 'Export of Education',
            en: 'Export of Education',
          },
        },
        {
          id: 'studentMobility',
          label: 'studentMobility',
          title: {
            fi: 'Kansainvälinen opiskelijaliikkuvuus',
            sv: 'International student mobility',
            en: 'International student mobility',
          },
        },
        {
          id: 'staffMobility',
          label: 'staffMobility',
          title: {
            fi: 'Kansainvälinen henkilöstöliikkuvuus',
            sv: 'International faculty or staff mobility',
            en: 'International faculty or staff mobility',
          },
        },
        {
          id: 'jointDegree',
          label: 'jointDegree',
          title: {
            fi: 'Yhteistutkintoyhteistyö',
            sv: 'Joint or Double Degree',
            en: 'Joint or Double Degree',
          },
        },
        {
          id: 'branchCampus',
          label: 'branchCampus',
          title: {
            fi: 'Etäkampus',
            sv: 'Branch Campus',
            en: 'Branch Campus',
          },
        },
        {
          id: 'otherCollaboration',
          label: 'otherCollaboration',
          title: {
            fi: 'Muu',
            sv: 'Other',
            en: 'Other',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 12,
    surveyId: 1,
    parentId: null,
    priority: 11,
    title: {
      fi: 'Yhteistyön kesto',
      sv: 'Duration of collaboration',
      en: 'Duration of collaboration',
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
          id: 'shortDuration',
          label: 'shortDuration',
          title: {
            fi: '0-18kk',
            sv: '0-18 months',
            en: '0-18 months',
          },
        },
        {
          id: 'mediumDuration',
          label: 'mediumDuration',
          title: {
            fi: '18-36kk',
            sv: '18-36 months',
            en: '18-36 months',
          },
        },
        {
          id: 'longDuration',
          label: 'longDuration',
          title: {
            fi: '36-54kk',
            sv: '36-54 months',
            en: '36-54 months',
          },
        },
        {
          id: 'veryLongDuration',
          label: 'veryLongDuration',
          title: {
            fi: '54+ kk',
            sv: '54+ months',
            en: '54+ months',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 13,
    surveyId: 1,
    parentId: null,
    priority: 12,
    title: {
      fi: 'Sisältyykö yhteistyöhön ulkopuolista rahoitusta?',
      sv: 'Is external funding included in this collaboration?',
      en: 'Is external funding included in this collaboration?',
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
          id: 'externalFunding',
          label: 'externalFunding',
          title: {
            fi: 'Kyllä',
            sv: 'Yes',
            en: 'Yes',
          },
          risk: 2,
        },
        {
          id: 'noExternalFunding',
          label: 'noExternalFunding',
          title: {
            fi: 'Ei',
            sv: 'No',
            en: 'No',
          },
          risk: 0,
        },
      ],
    },
    visibility: {},
  },
  {
    id: 14,
    surveyId: 1,
    parentId: 13,
    priority: 0,
    title: {
      fi: 'Onko yksikkösi saanut aiemmin rahoitusta samalta rahoittajalta?',
      sv: 'Has your unit been previously funded by the same funder?',
      en: 'Has your unit been previously funded by the same funder?',
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
          id: 'previouslyFunded',
          label: 'previouslyFunded',
          title: {
            fi: 'Kyllä',
            sv: 'Yes',
            en: 'Yes',
          },
          risk: 1,
        },
        {
          id: 'notPreviouslyFunded',
          label: 'notPreviouslyFunded',
          title: {
            fi: 'Ei',
            sv: 'No',
            en: 'No',
          },
          risk: 2,
        },
      ],
    },
    visibility: { options: ['externalFunding'] },
  },
  {
    id: 15,
    surveyId: 1,
    parentId: 13,
    priority: 1,
    title: {
      fi: 'Pääasiallinen rahoittaja on',
      sv: 'Classification of the principal funder',
      en: 'Classification of the principal funder',
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
          id: 'finnishPublicEntity',
          label: 'finnishPublicEntity',
          title: {
            fi: 'Suomalainen julkisyhteisö (esim. ministeriö)',
            sv: 'Finnish public entity (e.g. ministry)',
            en: 'Finnish public entity (e.g. ministry)',
          },
          risk: 1,
        },
        {
          id: 'finnishFoundation',
          label: 'finnishFoundation',
          title: {
            fi: 'Suomalainen säätiö tai vastaava',
            sv: 'Finnish foundation or similar',
            en: 'Finnish foundation or similar',
          },
          risk: 1,
        },
        {
          id: 'finnishCompany',
          label: 'finnishCompany',
          title: {
            fi: 'Suomalainen yritys',
            sv: 'Finnish company',
            en: 'Finnish company',
          },
          risk: 2,
        },
        {
          id: 'otherFinnishFunder',
          label: 'otherFinnishFunder',
          title: {
            fi: 'Muu suomalainen taho',
            sv: 'Other Finnish funder',
            en: 'Other Finnish funder',
          },
          risk: 2,
        },
        {
          id: 'internationalPublicEntity',
          label: 'internationalPublicEntity',
          title: {
            fi: 'Ulkomainen julisyhteisö (esim. EU, YK, ulkomainen ministeriö)',
            sv: 'International public entity (e.g. EU, UN, foreign ministry)',
            en: 'International public entity (e.g. EU, UN, foreign ministry)',
          },
          risk: 1,
        },
        {
          id: 'internationalFoundation',
          label: 'internationalFoundation',
          title: {
            fi: 'Ulkomainen säätiö tai vastaava',
            sv: 'International foundation or similar',
            en: 'International foundation or similar',
          },
          risk: 2,
        },
        {
          id: 'internationalCompany',
          label: 'internationalCompany',
          title: {
            fi: 'Ulkomainen yritys',
            sv: 'International company',
            en: 'International company',
          },
          risk: 2,
        },
        {
          id: 'otherInternationalFunder',
          label: 'otherInternationalFunder',
          title: {
            fi: 'Muu ulkomainen taho',
            sv: 'Other international funder',
            en: 'Other international funder',
          },
          risk: 2,
        },
      ],
    },
    visibility: { options: ['externalFunding'] },
  },
  {
    id: 16,
    surveyId: 1,
    parentId: null,
    priority: 13,
    title: {
      fi: 'Arvio HY:n taloudellisista vastuista koko yhteistyön ajalta (euroina)',
      sv: 'Estimate of YH financial responsibilities for the duration of collaboration (in euros)',
      en: 'Estimate of YH financial responsibilities for the duration of collaboration (in euros)',
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
          id: 'smallBudget',
          label: 'smallBudget',
          title: {
            fi: '0-50000',
            sv: '0-50000',
            en: '0-50000',
          },
        },
        {
          id: 'mediumBudget',
          label: 'mediumBudget',
          title: {
            fi: '50000-100000',
            sv: '50000-100000',
            en: '50000-100000',
          },
        },
        {
          id: 'largeBudget',
          label: 'largeBudget',
          title: {
            fi: '100000-250000',
            sv: '100000-250000',
            en: '100000-250000',
          },
        },
        {
          id: 'veryLargeBudget',
          label: 'veryLargeBudget',
          title: {
            fi: '250000+',
            sv: '250000+',
            en: '250000+',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 17,
    surveyId: 1,
    parentId: 6,
    priority: 0,
    title: {
      fi: 'Mikä?',
      sv: 'What?',
      en: 'What?',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: { type: 'text', options: [] },
    visibility: { options: ['otherType'] },
  },
  {
    id: 18,
    surveyId: 1,
    parentId: 9,
    priority: 0,
    title: {
      fi: 'Mikä?',
      sv: 'What?',
      en: 'What?',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: { type: 'text', options: [] },
    visibility: { options: ['otherRole'] },
  },
  {
    id: 19,
    surveyId: 1,
    parentId: 11,
    priority: 0,
    title: {
      fi: 'Mikä?',
      sv: 'What?',
      en: 'What?',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: { type: 'text', options: [] },
    visibility: { options: ['otherCollaboration'] },
  },
  {
    id: 20,
    surveyId: 1,
    parentId: 6,
    priority: 0,
    title: {
      fi: 'Mikä?',
      sv: 'What?',
      en: 'What?',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: {
      type: 'select',
      options: [],
      label: {
        fi: 'Valitse yliopisto',
        sv: 'Select university',
        en: 'Select university',
      },
    },
    visibility: { options: ['university'] },
  },
  {
    id: 21,
    surveyId: 1,
    parentId: 6,
    priority: 1,
    title: {
      fi: 'Muu yliopisto',
      sv: 'Other university',
      en: 'Other university',
    },
    text: {
      fi: '',
      sv: '',
      en: '',
    },
    optionData: { type: 'text', options: [] },
    visibility: { options: ['university'] },
  },
]

export default getQuestionData
