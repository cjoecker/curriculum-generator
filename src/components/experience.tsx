import { ExperienceAndEducation } from '../constants/curriculum-information.models'
import { formatTimePeriod } from '../utils/format-date'

interface ExperienceProps {
  experience: ExperienceAndEducation
}

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <div className="mb-5 last:mb-0">
      <div className="leading-snug">
        <span className="font-bold ">{experience.institution}</span>
        {' – '}
        <span>{experience.location}</span>
      </div>
      <div>
        {experience.positions.map((position) => (
          <div className="mb-5 last:mb-0" key={position.title}>
            <span className="underline decoration-1">{position.title}</span>
            <span className="ml-2 text-sky-800 ">
              {formatTimePeriod(position.startDate, position.endDate)}
            </span>
            {position.descriptionBlocks.map((description, index) => (
              <div className="mb-3 mt-1" key={index}>
                <div className="text-sm">{description.text}</div>
                <div className="text-xs italic -mt-0.5 ml-1">{description.tagsTitle}</div>
                <div className="flex flex-wrap">
                  {description.tags.map((tag) => (
                    <div className="bg-tag rounded-full text-sm px-2 bg-white m-1" key={tag}>
                      {tag}
                    </div>
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
