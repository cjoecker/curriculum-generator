import * as React from 'react'
import christian from '../images/christian.jpeg'
import { PERSONAL_INFORMATION } from '../constants/curriculum-information'
import location from '../images/location.svg'
import smartphone from '../images/smartphone.svg'
import email from '../images/email.svg'
import birthday from '../images/birthday.svg'
import passport from '../images/passport.svg'

interface PersonalInformationItemProps {
  icon: string
  label: string
}

export const PersonalInformationItem = ({ icon, label }: PersonalInformationItemProps) => {
  return (
    <div className="flex ">
      <div className="personal-information rounded-full h-8 min-w-[2rem] flex justify-center my-auto">
        <img src={icon} alt={label} className="m-auto h-5 w-5" />
      </div>
      <div className="whitespace-nowrap leading-5 ml-2 my-auto">{label}</div>
    </div>
  )
}

export const Header = () => {
  return (
    <>
      <div className="flex-grow-0 flex-shrink-0 flex">
        <img
          alt="candidate"
          src={christian}
          className="rounded-xl w-40 h-40 object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 ml-6">
        <div className="flex-1 flex flex-col w-full justify-center">
          <h1 className="font-bold text-blue text-3xl">{PERSONAL_INFORMATION.name}</h1>
          <h2 className="text-lg">{PERSONAL_INFORMATION.title}</h2>
        </div>
        <div className="w-full grid grid-cols-3 gap-2 max-w-[140mm]">
          <PersonalInformationItem icon={location} label={PERSONAL_INFORMATION.location} />
          <PersonalInformationItem icon={smartphone} label={PERSONAL_INFORMATION.phone} />
          <PersonalInformationItem icon={email} label={PERSONAL_INFORMATION.email} />
          <PersonalInformationItem icon={birthday} label={PERSONAL_INFORMATION.birthday} />
          <PersonalInformationItem icon={passport} label={PERSONAL_INFORMATION.citizenship} />
        </div>
      </div>
    </>
  )
}
