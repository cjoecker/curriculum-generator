import * as React from 'react'
import candidateImage from '../../public/images/candidate-image.jpeg'
import { PERSONAL_INFORMATION } from '@/constants/curriculum-information'
import { Link } from './link'
import Image from 'next/image'


interface Props {
  icon: string
  text: string
  href?: string
  altText: string
}

export const PersonalInformationItem = ({ icon, text, href, altText }: Props) => {
  const iconSrc = `./images/${icon}.svg`
  const enhancedText = href ? <Link href={href}>{text}</Link> : <>{text}</>

  return (
    <div className="flex ">
      <div className="bg-information-circle rounded-full h-8 min-w-[2rem] flex justify-center my-auto">
        <Image width={24} height={24} src={iconSrc} alt={altText} className="m-auto h-5 w-5" />
      </div>
      <div className="whitespace-pre-wrap leading-4 leading-5 ml-2 my-auto">{enhancedText}</div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex-grow-0 flex-shrink-0 flex gap-4">
        <Image alt="candidate" width={240} height={240} src={candidateImage} className="rounded-xl w-40 h-40 object-cover" />
        <div className="flex-1 flex flex-col w-full justify-center">
          <h1 className="font-bold text-sky-800 text-3xl">{PERSONAL_INFORMATION.name}</h1>
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
