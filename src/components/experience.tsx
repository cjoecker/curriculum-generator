import { formatDate } from '../app'
import {
  differenceInMonths,
} from 'date-fns'
import {ExperienceAndEducation, PeriodOfTime} from "../constants/curriculum-information.models";

interface ExperienceBlockProps {
  experience: ExperienceAndEducation
}

export const Experience = ({ experience }: ExperienceBlockProps) => {
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
            <span className="ml-2 text-blue ">
              {formatTimePeriod(position.startDate, position.endDate)}
            </span>
            {position.descriptionBlocks.map((description, index) => (
              <div className="mb-3 mt-1" key={index}>
                <div className="text-sm">{description.text}</div>
                <div className="text-xs italic -mt-0.5 ml-1">{description.tagsTitle}</div>
                <div className="flex flex-wrap">
                  {description.tags.map((tag) => (
                    <div className="chip rounded-full text-sm px-2 bg-white m-1" key={tag}>
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
function formatTimePeriod(startDate: PeriodOfTime['startDate'], endDate: PeriodOfTime['endDate']) {
  const newEndDate = endDate === 'today' ? new Date() : endDate

  const distanceInYears = (differenceInMonths(newEndDate, startDate) + 1) / 12
  const distance =
    distanceInYears > 1
      ? `${distanceInYears.toFixed(1).replace('.0','')}y`
      : `${differenceInMonths(newEndDate, startDate)}m`

  return endDate === 'today'
    ? `${formatDate(startDate)} - Present  (${distance})`
    : `${formatDate(startDate)} - ${formatDate(endDate)}  (${distance})`
}
