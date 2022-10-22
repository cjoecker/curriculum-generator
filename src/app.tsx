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
import { useMediaQuery } from 'react-responsive'

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
      <div className="w-[210mm] h-[296mm] mx-auto p-[3mm] relative bg-main">
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
          Last updated on {formatDate(new Date(), true)}
        </div>
      </div>
    </div>
  )
}

export default App

export function formatDate(date: Date, showDay = false) {
  return showDay ? format(date, 'MMM dd, yyyy') : format(date, 'MMM, yyyy')
}
