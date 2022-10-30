import { Title } from './title'
import { HOBBIES } from '../constants/curriculum-information'

export const Hobbies = () => {
  return (
    <div className="flex flex-col">
      <Title label="Hobbies & Projects" />
      {HOBBIES}
    </div>
  )
}
