import { Title } from './title'
import { EXPERIENCE } from '../constants/curriculum-information'
import { Experience } from './experience'

export const WorkExperience = () => {
  return (
    <div className="flex flex-col">
      <Title label={'Work Experience'} />
      {EXPERIENCE.map((experienceBlock) => (
        <Experience experience={experienceBlock} key={experienceBlock.institution} />
      ))}
    </div>
  )
}
