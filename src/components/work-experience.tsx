import {Title} from './title';
import {EXPERIENCE} from '../constants/curriculum-information';
import {Experience} from './experience';
import React from 'react';

export const WorkExperience = () => {
    return (
        <div className="flex flex-col">
            <Title label={'Professional WorkExperience'} />
            {EXPERIENCE.map((experienceBlock) => (
                <Experience experience={experienceBlock} key={experienceBlock.institution}/>
            ))}
        </div>
    )
}
