import { ExperienceType } from '../constants/curriculum-information'

interface ExperienceBlockProps {
  experience: ExperienceType
}

export const Experience = ({ experience }: ExperienceBlockProps) => {
  return (
    <div className="mb-2">
      <span className="font-bold ">{experience.company}</span>
      {' – '}
      <span>{experience.location}</span>
      <div>
        {experience.positions.map((position) => (
          <div key={position.title}>
            <span className="underline">{position.title}</span>
            <span className="ml-2 text-blue ">{position.timeFrame}</span>
            {position.descriptionBlocks.map((description,index) => (
              <div className="mb-2" key={index}>
                <div className="text-sm">{description.text}</div>
                <div className="text-xs italic -mt-0.5 ml-1">{description.chipsTitle}</div>
                <div className="flex flex-wrap">
                  {description.chips.map((chip) => (
                    <div className="chip rounded-full text-sm px-2 bg-white m-1" key={chip}>{chip}</div>
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
