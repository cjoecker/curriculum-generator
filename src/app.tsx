import React from 'react'
import './app.css'
import { LeftColumn } from './components/left-column'
import { darken } from 'polished'
import {RightColumn} from "./components/right-column";

const BACKGROUND_COLOR = '#e3e3f1'

function App() {
  return (
    <div className='h-screen w-screen flex font-quicksand text-black '>
      <div
        className='w-[210mm] h-[296mm] mx-auto'
        style={{
          background: `linear-gradient(145deg, ${BACKGROUND_COLOR}, ${darken(
            0.15,
            BACKGROUND_COLOR,
          )})`,
        }}
      >
        <div className='flex w-full'>
          <LeftColumn />
          <RightColumn/>
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
