import location from '../images/location.svg';
import smartphone from '../images/smartphone.svg';
import email from '../images/email.svg';
import birthday from '../images/birthday.svg';
import passport from '../images/passport.svg';
import React from 'react';
import {
  HOBBIES,
  LANGUAGES,
  PERSONAL_INFORMATION,
} from '../constants/curriculum-information';

interface PersonalInformationItemProperties {
  icon: string;
  label: string;
}

const PersonalInformationItem = ({
  icon,
  label,
}: PersonalInformationItemProperties) => {
  return (
    <div className="flex flex-1">
      <img src={icon} alt={label} className="mr-2" />
      <div className="whitespace-pre-wrap leading-5">{label}</div>
    </div>
  );
};

interface LanguageProperties {
  language: string;
  level: string;
}

const Language = ({ language, level }: LanguageProperties) => {
  return (
    <div className="flex-1">
      <span className="font-bold">{`${language}: `}</span>
      <span className="whitespace-pre-wrap">{level}</span>
    </div>
  );
};

interface TitleProperties {
  label: string;
}

const Title = ({ label }: TitleProperties) => {
  return (
    <div className="font-bold text-primary text-center text-lg mt-8">
      {label}
    </div>
  );
};

export const LeftColumn = () => {
  return (
    <div className="flex-1 flex gap-4 p-4 flex-col">
      <div className="rounded-full w-full pb-full mx-auto bg-primary" />
      <div className="flex flex-col gap-4">
        <Title label="Personal Information" />
        <PersonalInformationItem
          icon={location}
          label={PERSONAL_INFORMATION.location}
        />
        <PersonalInformationItem
          icon={smartphone}
          label={PERSONAL_INFORMATION.phone}
        />
        <PersonalInformationItem
          icon={email}
          label={PERSONAL_INFORMATION.email}
        />
        <PersonalInformationItem
          icon={birthday}
          label={PERSONAL_INFORMATION.birthday}
        />
        <PersonalInformationItem
          icon={passport}
          label={PERSONAL_INFORMATION.citizenship}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Title label="Language" />
        {LANGUAGES.map((language) => (
          <Language
            key={language.language}
            language={language.language}
            level={language.level}
          />
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <Title label="Hobbies & Projects" />
        {HOBBIES}
      </div>
    </div>
  );
};
