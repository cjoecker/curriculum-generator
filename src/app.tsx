import React, { ReactNode } from 'react'
import './app.css'
import { Language, LeftColumn, PersonalInformationItem } from './components/left-column'
import { darken } from 'polished'
import { ExperienceBlock, RightColumn, Title } from './components/right-column'
import christian from './images/christian.jpeg'
import location from './images/location.svg'
import {
  EXPERIENCE,
  HOBBIES,
  LANGUAGES,
  PERSONAL_INFORMATION,
  STUDIES,
} from './constants/curriculum-information'
import smartphone from './images/smartphone.svg'
import email from './images/email.svg'
import birthday from './images/birthday.svg'
import passport from './images/passport.svg'

const BACKGROUND_COLOR = '#e3e3f1'

function App() {
  return (
    <div className="h-screen w-screen flex font-quicksand text-black ">
      <div
        className="w-[210mm] h-[296mm] mx-auto p-[3mm]"
        style={{
          background: `linear-gradient(145deg, ${BACKGROUND_COLOR}, ${darken(
            0.15,
            BACKGROUND_COLOR,
          )})`,
        }}
      >
        <Box>
          <div className="flex-grow-0 flex-shrink-0">
            <img
              alt="christian's picture"
              src={christian}
              className="rounded-full w-36 h-36 object-cover mx-auto"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex-1 flex flex-col">
              <h1 className="font-bold text-blue text-center text-3xl">
                {PERSONAL_INFORMATION.name}
              </h1>
              <h2 className="text-center text-lg">{PERSONAL_INFORMATION.title}</h2>
            </div>
            <div className="flex-1 w-full justify-center mt-4 grid grid-cols-3 gap-2">
              <PersonalInformationItem icon={location} label={PERSONAL_INFORMATION.location} />
              <PersonalInformationItem icon={smartphone} label={PERSONAL_INFORMATION.phone} />
              <PersonalInformationItem icon={email} label={PERSONAL_INFORMATION.email} />
              <PersonalInformationItem icon={birthday} label={PERSONAL_INFORMATION.birthday} />
              <PersonalInformationItem icon={passport} label={PERSONAL_INFORMATION.citizenship} />
            </div>
          </div>
        </Box>
        <div className="flex" >
          <div className="flex-1 min-w-[134mm] box m-3 p-2">
            <div>
              <div className="flex flex-col">
                <Title label={'Professional Experience'} />
                {EXPERIENCE.map((experienceBlock) => (
                  <ExperienceBlock experience={experienceBlock} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 box m-3 p-2">
            <div>
              <div className="flex flex-col">
                <Title label={'Education'} />
                {STUDIES.map((experienceBlock) => (
                  <ExperienceBlock experience={experienceBlock} />
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <Title label="Language" />
                {LANGUAGES.map((language) => (
                  <Language
                    key={language.language}
                    language={language.language}
                    level={language.level}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <Title label="Hobbies & Projects" />
                {HOBBIES}
              </div>
            </div>
          </div>
        </div>
        {/*<div className='flex w-full'>*/}
        {/*  <LeftColumn />*/}
        {/*  <RightColumn/>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

export default App

export type Props = {
  children: ReactNode | ReactNode[]
}
export const Box = ({ children }: Props) => {
  return <div className="box flex m-3 p-2">{children}</div>
}

// const primary = '#0f61a0'
// const primaryContrastText = '#fafafa'
// const secondary = '#6d6d6d'
// const secondaryContrastText = '#fafafa'
// const primaryText = '#3D3D3D'
// const secondaryText = '#575757'
// const disabledText = '#858585'
// const paperBackground = '#ffffff'
