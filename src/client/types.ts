import { Locales, Question, User } from '@backend/types'
import { Control, UseFormWatch, UseFormRegister } from 'react-hook-form'

import { FORM_DATA_KEY } from '../config'

export interface Faculty {
  code: string
  name: Locales
}

export interface InputProps {
  control?: Control<any>
  watch?: UseFormWatch<any>
  register?: UseFormRegister<any>
  question?: Question
  children?: React.ReactNode
  language?: string
  questions?: Question[]
  isSubmitted?: boolean
  selectedCountry?: string
  defaultValue?: string
}

export interface FormValues {
  [key: number]: any
  faculty: string
  selectOrganisation: string
}

export type SurveySave = typeof FORM_DATA_KEY

export interface PersistForm {
  value: FormValues
  sessionStorageKey: SurveySave
}

export interface Dimension {
  id: string
  label: string
  color: string
  title: Locales
  text: Locales
}

export interface Survey {
  id: number
  name: string
  title: Locales
  text: Locales
  Questions: Question[]
  createdAt?: Date
  updatedAt?: Date
}

export interface Entry {
  id: number
  surveyId: number
  userId: string
  data: RiskData
  sessionToken: string
  reminderSent: boolean
  SurveyId: number
  UserId: string
  createdAt: string
  survey: Survey
  User: User
}

export interface Risk {
  id: string
  title: string
  level: any
  infoText?: string
}

export interface RiskData {
  answers: FormValues
  risks: Risk[]
  country: CountryData[]
  updatedData?: {
    answers: FormValues
    risks: Risk[]
    country: CountryData[]
    createdAt: string
  }[]
}

export type Country = {
  code: string
  name: string
}

export type CountryData = {
  academicfreedom: number
  code: string
  corruption: number
  stability: number
  hci: number
  safetyLevel: number
  universities: string[]
  sanctions: object[] | number
  gdpr?: number | null
  createdAt?: string
  ruleOfLaw?: number
}
