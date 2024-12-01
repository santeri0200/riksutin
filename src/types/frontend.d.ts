import type { ReactNode } from 'react'
import type { Control, UseFormWatch, UseFormRegister } from 'react-hook-form'
import type { Locales, Question, FormValues, RiskData, User } from '@types'

import { FORM_DATA_KEY } from '@client/config'

export interface InputProps {
  control?: Control<any>
  watch?: UseFormWatch<any>
  register?: UseFormRegister<any>
  question?: Question
  children?: ReactNode
  language?: string
  questions?: Question[]
  isSubmitted?: boolean
  selectedCountry?: string
  defaultValue?: string
}

export type SurveySave = typeof FORM_DATA_KEY

export interface PersistForm {
  value: FormValues
  sessionStorageKey: SurveySave
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

// Maybe conflicting with @db/models: Entry?
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

export interface Dimension {
  id: string
  label: string
  color: string
  title: Locales
  text: Locales
}

export interface InfoType {
  id: string
  title: Locales
}

export interface OptionUpdates {
  title: Locales
  data?: Locales
}
