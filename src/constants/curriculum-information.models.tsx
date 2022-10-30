import { ReactNode } from 'react'

export type PersonalInformation = {
  name: string
  title: string
  summary: ReactNode
  tags: {
    icon:
      | 'location'
      | 'birthday'
      | 'phone'
      | 'email'
      | 'github'
      | 'twitter'
      | 'linkedin'
      | 'passport'
    altText: string
    text: string
    href?: string
  }[]
}

export type Languages = { language: string; level: string }[]

export type Hobbies = ReactNode

export type ExperienceAndEducation = {
  institution: string
  location: string
  positions: PeriodOfTime[]
}
export type PeriodOfTime = {
  title: string
  startDate: Date
  endDate: Date | 'today'
  descriptionBlocks: { text: ReactNode; tagsTitle: string; tags: string[] }[]
}


