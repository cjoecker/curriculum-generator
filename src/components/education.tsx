import { EDUCATION } from '../constants/curriculum-information'
import { Title } from './title'
import { Experience } from './experience'

export const Education = () => {
  return (
    <div className="flex flex-col">
      <Title label={'Education'} />
      {EDUCATION.map((experienceBlock) => (
        <Experience experience={experienceBlock} key={experienceBlock.institution} />
      ))}
    </div>
  )
}
