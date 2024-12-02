import { Entry } from '@db/models'
import type { Request } from 'express'
import type { Locales, RiskData, User } from '@types'

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

export interface RequestWithUser extends Request {
  user: User
}

export interface EntryValues {
  data: RiskData
  sessionToken: string
}

export interface EntryWithUser extends Entry {
  User: User
}

export type UpdatedCountryData = {
  sanctions: number
  safetyLevel: number
  gdpr: number | null
  academicfreedom: number
  code: string
  corruption: number
  stability: number
  hci: number
  universities: string[]
  createdAt?: string
  ruleOfLaw: number
}
