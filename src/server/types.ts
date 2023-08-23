import { Request } from 'express'
import { Entry } from './db/models'

export type Locales = {
  fi: string
  en: string
  sv: string
}

export type Programme = {
  key: string
  name: Locales
  level: string
  companionFaculties: Array<string>
  international: boolean
}

export interface OrganisationData {
  code: string
  name: Locales
  programmes: Array<Programme>
}

export interface UserInfo {
  uid: string
  hyPersonSisuId: string
  email: string
  hyGroupCn: string[]
  preferredLanguage: string
  given_name: string
  family_name: string
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

export interface RequestWithUser extends Request {
  user: User
}

export interface OptionUpdates {
  title: Locales
  data?: Locales
}

export interface Recommendation {
  id?: number
  surveyId: number
  label: string
  type: 'teaching' | 'administration'
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

export interface InfoType {
  id: string
  title: Locales
}

export type SingleChoiceType = {
  id: string
  label: string
  title: Locales
}

export interface MultipleChoiceType extends SingleChoiceType {
  data: Locales
}

/** List of question selection id's that controls the visibility of a tool */
export type Visibility = {
  options?: string[]
}

export type ChoiceType = SingleChoiceType[] | MultipleChoiceType[]

export type PossibleChoiceTypes = 'singleChoice' | 'multipleChoice' | 'info'

export interface OptionData {
  type: PossibleChoiceTypes
  options: ChoiceType
}
export interface EntryValues {
  data: FormValues
  sessionToken: string
}
export interface FormValues {
  [key: number]: Record<string, { [key: string]: boolean }>
  course: string
  faculty: string
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

export interface EntryWithUser extends Entry {
  User: User
}
