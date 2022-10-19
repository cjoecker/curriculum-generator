import location from '../images/location.svg'
import smartphone from '../images/smartphone.svg'
import email from '../images/email.svg'
import birthday from '../images/birthday.svg'
import passport from '../images/passport.svg'
import React from 'react'
import christian from '../images/christian.jpeg'
import { HOBBIES, LANGUAGES, PERSONAL_INFORMATION } from '../constants/curriculum-information'

interface PersonalInformationItemProps {
  icon: string
  label: string
}

export const PersonalInformationItem = ({ icon, label }: PersonalInformationItemProps) => {
  return (
    <div className='flex '>
        <div className="personal-information rounded-full h-8 min-w-[2rem] flex justify-center my-auto">
            <img src={icon} alt={label} className='m-auto h-5 w-5' />
        </div>
      <div className='whitespace-nowrap leading-5 ml-2 my-auto'>{label}</div>
    </div>
  )
}

interface LanguageProps {
  language: string
  level: string
}

export const Language = ({ language, level }: LanguageProps) => {
  return (
    <div className='flex-1'>
      <span className='font-bold'>{`${language}: `}</span>
      <span className='whitespace-pre-wrap'>{level}</span>
    </div>
  )
}

interface TitleProps {
  label: string
}

const Title = ({ label }: TitleProps) => {
  return <h3 className='font-bold text-blue text-center text-lg mt-8'>{label}</h3>
}

export const LeftColumn = () => {
  return (
    <div className='flex-shrink-0 flex-grow-0 w-[55mm] flex gap-4 p-4 flex-col'>
      <img alt="christian's picture" src={christian} className='rounded-full w-44 h-44 object-cover mx-auto' />
      <div className='flex flex-col gap-4'>
        <Title label='Personal Information' />
        <PersonalInformationItem icon={location} label={PERSONAL_INFORMATION.location} />
        <PersonalInformationItem icon={smartphone} label={PERSONAL_INFORMATION.phone} />
        <PersonalInformationItem icon={email} label={PERSONAL_INFORMATION.email} />
        <PersonalInformationItem icon={birthday} label={PERSONAL_INFORMATION.birthday} />
        <PersonalInformationItem icon={passport} label={PERSONAL_INFORMATION.citizenship} />
      </div>
      <div className='flex flex-col gap-1'>
        <Title label='Language' />
        {LANGUAGES.map((language) => (
          <Language key={language.language} language={language.language} level={language.level} />
        ))}
      </div>
      <div className='flex flex-col gap-1'>
        <Title label='Hobbies & Projects' />
        {HOBBIES}
      </div>
    </div>
  )
}
