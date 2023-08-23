import { InfoType } from '@backend/types'
import { Dimension } from '../../types'

export const recommendationTypes: InfoType[] = [
  {
    id: 'teaching',
    title: {
      fi: 'Opetus',
      sv: 'Opetus',
      en: 'Teaching',
    },
  },
  {
    id: 'administration',
    title: {
      fi: 'Hallinto',
      sv: 'Hallinto',
      en: 'Adminisitration',
    },
  },
]

export const allSelection: Dimension = {
  id: 'allDimensions',
  label: 'allDimensions',
  color: '#000000',
  title: {
    fi: 'Kaikki',
    sv: 'All',
    en: 'All',
  },
  text: {
    fi: 'Kaikki',
    sv: 'All',
    en: 'All',
  },
}

export const languages: InfoType[] = [
  {
    id: 'en',
    title: {
      fi: 'englanti',
      sv: 'engelska',
      en: 'English',
    },
  },
  {
    id: 'sv',
    title: {
      fi: 'ruotsi',
      sv: 'svenska',
      en: 'Swedish',
    },
  },
]

export const questionTypes: InfoType[] = [
  {
    id: 'singleChoice',
    title: {
      fi: 'Yksittäis valinta',
      sv: 'Yksittäis valinta',
      en: 'Yksittäis valinta',
    },
  },
  {
    id: 'multipleChoice',
    title: {
      fi: 'Monivalinta',
      sv: 'Monivalinta',
      en: 'Monivalinta',
    },
  },
  {
    id: 'info',
    title: {
      fi: 'Infokenttä',
      sv: 'Infokenttä',
      en: 'Infokenttä',
    },
  },
]
