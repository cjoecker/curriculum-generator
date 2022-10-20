import {STUDIES} from '../constants/curriculum-information';
import React from 'react';
import {Title} from './title';
import {Experience} from "./experience";

export const Education = () => {
    return (
        <div className="flex flex-col">
            <Title label={'Education'} />
            {STUDIES.map((experienceBlock) => (
                <Experience experience={experienceBlock} key={experienceBlock.company} />
            ))}
        </div>
    )
}
