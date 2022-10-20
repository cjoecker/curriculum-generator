import {Title} from './title';
import {HOBBIES} from '../constants/curriculum-information';
import React from 'react';

export const Hobbies = () => {
    return (
        <div className="flex flex-col">
            <Title label="Hobbies & Projects" />
            {HOBBIES}
        </div>
    )
}
