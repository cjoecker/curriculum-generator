import React, { ReactNode, useEffect } from 'react'
import './app.css'
import { darken } from 'polished'

import { Header } from './components/header'
import { Languages } from './components/languagues'
import { Education } from './components/education'
import { WorkExperience } from './components/work-experience'

import { Hobbies } from './components/hobbies'
import { format } from 'date-fns'
import { PERSONAL_INFORMATION } from './constants/curriculum-information'

const BACKGROUND_COLOR = '#e3e3f1'
export const Box = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return <div className="flex m-5 ">{children}</div>
}

function App() {
  useEffect(() => {
    document.title = `cv_${PERSONAL_INFORMATION.name
      .replace(' ', '_')
      .replace('ö', 'oe')
      .toLowerCase()}_en`
  })
  return (
    <div className="h-screen w-screen flex font-quicksand text-black ">
      <div
        className="w-[210mm] h-[296mm] mx-auto p-[3mm] relative"
        style={{
          background: `linear-gradient(145deg, ${BACKGROUND_COLOR}, ${darken(
            0.15,
            BACKGROUND_COLOR,
          )})`,
        }}
      >
        <Box>
          <Header />
        </Box>
        <div className="flex">
          <div className="min-w-[134mm]">
            <Box>
              <WorkExperience />
            </Box>
          </div>
          <div>
            <Box>
              <Education />
            </Box>
            <Box>
              <Languages />
            </Box>
            <Box>
              <Hobbies />
            </Box>
          </div>
        </div>
        <div className="absolute right-8 bottom-4 italic">
          Last updated on {format(new Date(), 'MMM dd, yyyy')}
        </div>
      </div>
    </div>
  )
}

export default App

// const primary = '#0f61a0'
// const primaryContrastText = '#fafafa'
// const secondary = '#6d6d6d'
// const secondaryContrastText = '#fafafa'
// const primaryText = '#3D3D3D'
// const secondaryText = '#575757'
// const disabledText = '#858585'
// const paperBackground = '#ffffff'
