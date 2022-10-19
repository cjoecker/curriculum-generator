import {
  EXPERIENCE,
  Experience,
  PERSONAL_INFORMATION,
  STUDIES,
} from '../constants/curriculum-information'
import React from 'react'

export const RightColumn = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex flex-col mt-4">
        <h1 className="font-bold text-blue text-center text-3xl mt-2">
          {PERSONAL_INFORMATION.name}
        </h1>
        <h2 className="text-center text-lg">{PERSONAL_INFORMATION.title}</h2>
      </div>
      <Title label={'Professional Experience'} />
      {EXPERIENCE.map((experienceBlock) => (
        <ExperienceBlock experience={experienceBlock} />
      ))}
      <Title label={'Education'} />
      {STUDIES.map((experienceBlock) => (
        <ExperienceBlock experience={experienceBlock} />
      ))}
    </div>
  )
}

interface TitleProps {
  label: string
}

export const Title = ({ label }: TitleProps) => {
  return <h3 className="font-bold text-blue text-lg">{label}</h3>
}

interface ExperienceBlockProps {
  experience: Experience
}

export const ExperienceBlock = ({ experience }: ExperienceBlockProps) => {
  return (
    <div className="mt-2">
      <span className="font-bold ">{experience.company}</span>
      {' – '}
      <span>{experience.location}</span>
      <div>
        {experience.positions.map((position) => (
          <div>
            <span className="underline">{position.title}</span>
            <span className="ml-2 text-blue ">{position.timeFrame}</span>
            {position.descriptionBlocks.map((description) => (
              <div className="mb-2">
                <div className="text-sm">{description.text}</div>
                <div className="text-xs italic -mt-0.5 ml-1">{description.chipsTitle}</div>
                <div className="flex flex-wrap">
                  {description.chips.map((chip) => (
                    <div className="chip rounded-full text-sm px-2 bg-white m-1">{chip}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
