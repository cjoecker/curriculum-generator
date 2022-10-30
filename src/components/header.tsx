import * as React from 'react'
import christian from '../images/christian.jpeg'
import { PERSONAL_INFORMATION } from '../constants/curriculum-information'
import { Link } from './link'

interface Props {
  icon: string
  text: string
  href?: string
  altText: string
}

export const PersonalInformationItem = ({
  icon,
  text,
  href,
  altText,
}: Props) => {
    // eslint-disable-next-line unicorn/prefer-module
  const icons = require.context('../images/', false)
  const iconSrc = icons(`./${icon}.svg`)
  const enhancedText = href ? <Link href={href}>{text}</Link> : <>{text}</>

  return (
    <div className="flex ">
      <div className="personal-information rounded-full h-8 min-w-[2rem] flex justify-center my-auto">
        <img src={iconSrc} alt={altText} className="m-auto h-5 w-5" />
      </div>
      <div className="whitespace-pre-wrap leading-4 leading-5 ml-2 my-auto">{enhancedText}</div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex-grow-0 flex-shrink-0 flex gap-4">
        <img alt="candidate" src={christian} className="rounded-xl w-40 h-40 object-cover" />
        <div className="flex-1 flex flex-col w-full justify-center">
          <h1 className="font-bold text-blue text-3xl">{PERSONAL_INFORMATION.name}</h1>
          <h2 className="text-lg font-bold">{PERSONAL_INFORMATION.title}</h2>
          <p className="text-sm mt-2">{PERSONAL_INFORMATION.summary}</p>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="w-full grid grid-cols-4 gap-2 ">
          {PERSONAL_INFORMATION.tags.map((t) => (
            <PersonalInformationItem
              key={t.altText}
              icon={t.icon}
              text={t.text}
              href={t.href}
              altText={t.altText}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
