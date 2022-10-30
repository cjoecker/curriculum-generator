import React, { ReactNode, useEffect } from 'react'
import './app.css'

import { Header } from './components/header'
import { Languages } from './components/languagues'
import { Education } from './components/education'
import { WorkExperience } from './components/work-experience'

import { Hobbies } from './components/hobbies'
import { PERSONAL_INFORMATION } from './constants/curriculum-information'
import {formatDate} from './utils/format-date';

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
      <div className="w-[210mm] h-[296mm] mx-auto p-[2mm] relative bg-main">
        <Box>
          <Header />
        </Box>
        <div className="flex">
          <div className="min-w-[145mm]">
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
        <div className="absolute bottom-3 left-0 px-[6mm] italic flex justify-between w-full">
          <div className="opacity-70">
            Handcrafted with <span className="not-italic	">♥</span> and React
          </div>
          <div className="">Last updated on {formatDate(new Date(), true)}</div>
        </div>
      </div>
    </div>
  )
}

export default App
