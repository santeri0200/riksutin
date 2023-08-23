import { Question } from '../types'

const getQuestionData = (): Question[] => [
  {
    id: 1,
    surveyId: 1,
    parentId: null,
    priority: 0,
    title: {
      fi: 'Yleinen kysymys',
      sv: 'Generell fråga',
      en: 'General Question',
    },
    text: {
      fi: 'Tämä on yleinen kysymys.',
      sv: 'Det här är en generell fråga.',
      en: 'This is a general question.',
    },
    optionData: { type: 'info', options: [] },
    visibility: {},
  },
  {
    id: 2,
    surveyId: 1,
    parentId: null,
    priority: 1,
    title: {
      fi: 'Kysymys valinnasta',
      sv: 'Fråga om val',
      en: 'Choice Question',
    },
    text: {
      fi: 'Valitse suosikkisi.',
      sv: 'Välj din favorit.',
      en: 'Choose your favorite.',
    },
    optionData: {
      type: 'singleChoice',
      options: [
        {
          id: 'option1',
          label: 'option1',
          title: {
            fi: 'Vaihtoehto 1',
            sv: 'Alternativ 1',
            en: 'Option 1',
          },
        },
        {
          id: 'option2',
          label: 'option2',
          title: {
            fi: 'Vaihtoehto 2',
            sv: 'Alternativ 2',
            en: 'Option 2',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 3,
    surveyId: 1,
    parentId: null,
    priority: 2,
    title: {
      fi: 'Monivalintakysymys',
      sv: 'Fråga med flera val',
      en: 'Multiple Choice Question',
    },
    text: {
      fi: 'Valitse useita vaihtoehtoja.',
      sv: 'Välj flera alternativ.',
      en: 'Choose multiple options.',
    },
    optionData: {
      type: 'multipleChoice',
      options: [
        {
          id: 'option3',
          label: 'option3',
          title: {
            fi: 'Vaihtoehto 3',
            sv: 'Alternativ 3',
            en: 'Option 3',
          },
        },
        {
          id: 'option4',
          label: 'option4',
          title: {
            fi: 'Vaihtoehto 4',
            sv: 'Alternativ 4',
            en: 'Option 4',
          },
        },
      ],
    },
    visibility: {},
  },
  {
    id: 4,
    surveyId: 1,
    parentId: 3,
    priority: 0,
    title: {
      fi: 'Lapsikysymys',
      sv: 'Barnfråga',
      en: 'Child Question',
    },
    text: {
      fi: 'Tämä on lapsikysymys.',
      sv: 'Det här är en barnfråga.',
      en: 'This is a child question.',
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
    visibility: { options: ['option3'] },
  },
  {
    id: 5,
    surveyId: 1,
    parentId: 4,
    priority: 0,
    title: {
      fi: 'Sisennetty Lapsikysymys',
      sv: 'Inkurerad Barnfråga',
      en: 'Indented Child Question',
    },
    text: {
      fi: 'Tämä on lapsikysymyksen lapsikysymys.',
      sv: 'Det här är en barnfråga.',
      en: 'This is a child question.',
    },
    optionData: {
      type: 'multipleChoice',
      options: [
        {
          id: 'childOption3',
          label: 'childOption3',
          title: {
            fi: 'Vaihtoehto 1',
            sv: 'Alternativ 1',
            en: 'Option 1',
          },
          data: {
            fi: 'Tähän kirjoitettu teksti tulee monivalintakysymyksessä näkyviin kysymysmerkkinä valinnan viereen.',
            sv: 'Texten som skrivs här kommer att visas som ett frågetecken bredvid valet i en flervalsfråga.',
            en: 'The text written here will appear as a question mark next to the choice in a multiple-choice question.',
          },
        },
        {
          id: 'childOption4',
          label: 'childOption4',
          title: {
            fi: 'Vaihtoehto 2',
            sv: 'Alternativ 2',
            en: 'Option 2',
          },
          data: {
            fi: '',
            sv: '',
            en: '',
          },
        },
      ],
    },
    visibility: {},
  },
]

export default getQuestionData
