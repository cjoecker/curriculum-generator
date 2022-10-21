import {Title} from './title';
import {LANGUAGES} from '../constants/curriculum-information';
import React from 'react';

export const Language = ({ language, level }: { language: string; level: string }) => {
    return (
        <div className="flex-1">
            <span className="font-bold">{`${language}: `}</span>
            <span className="whitespace-pre-wrap">{level}</span>
        </div>
    )
}

export const Languages = () => {
    return (
        <div className="flex flex-col mb-4">
            <Title label="Language" />
            {LANGUAGES.map((language) => (
                <Language key={language.language} language={language.language} level={language.level} />
            ))}
        </div>
    )
}
