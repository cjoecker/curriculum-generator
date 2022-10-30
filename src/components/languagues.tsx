import { Title } from './title'
import { LANGUAGES } from '../constants/curriculum-information'

export const Languages = () => {
  return (
    <div className="flex flex-col mb-4">
      <Title label="Languages" />
      {LANGUAGES.map((l) => (
        <div className="flex-1">
          <span className="font-bold">{`${l.language}: `}</span>
          <span className="whitespace-pre-wrap">{l.level}</span>
        </div>
      ))}
    </div>
  )
}
