export * from './types/frontend'
export * from './types/backend'

export type Locales = {
  fi: string
  en: string
  sv: string
}

export interface FormValues {
  [key: number]: any
  faculty: string
  selectOrganisation: string
}

export interface Risk {
  id: string
  title: string
  level: any
  infoText?: string
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
  ruleOfLaw: number
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

export type PossibleChoiceTypes =
  | 'singleChoice'
  | 'multipleChoice'
  | 'info'
  | 'text'
  | 'countrySelect'
  | 'organisationSelect'
  | 'universitySelect'
  | 'highRiskCountrySelect'

export type SingleChoiceType = {
  id: string
  label: string
  title: Locales
  risk: number
}

export interface MultipleChoiceType extends SingleChoiceType {
  data: Locales
}

export type ChoiceType = SingleChoiceType[] | MultipleChoiceType[] | any[]

export interface OptionData {
  type: PossibleChoiceTypes
  options: ChoiceType
  label?: Locales
}

/** List of question selection id's that controls the visibility of a tool */
export type Visibility = {
  options?: string[]
}

export interface Question {
  id: number
  surveyId: number
  parentId: number | null
  priority: number
  title: Locales
  text: Locales
  optionData: OptionData
  visibility: Visibility
}

export type Country = {
  code: string
  name: string
}

export interface Faculty {
  code: string
  name: Locales
}

export interface User {
  id: string
  username: string
  firstName: string
  lastName: string
  email: string
  language: string
  isAdmin: boolean
  iamGroups: string[]
  newUser?: boolean
}

export interface Recommendation {
  id?: number
  surveyId: number
  label: string
  type: 'common'
  title: Locales
  text: Locales
}

export interface Result {
  id: number
  surveyId: number
  optionLabel: string
  isSelected: Locales
  data: Record<string, Locales>
}
