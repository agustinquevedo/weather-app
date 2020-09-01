import React from 'react';
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudSun } from '@fortawesome/free-solid-svg-icons'

library.add(
    faSun,
    faCloudSun
);

const icons = {
    sunny: "faSun",
    fog: "faCloudSun"
}

const getFontAwesomeIcon = weatherState => {
    const icon = icons[weatherState]
    if (icon) 
        return <FontAwesomeIcon icon={icon} size="lg"/>
    else
        return <FontAwesomeIcon icon={faSun} size="lg"/>
}

const WeatherTemperature = ({temperature, weatherState}) => {
    return (
        <div>
            { getFontAwesomeIcon(weatherState) }
            <span>{` ${temperature} C`}</span>
        </div>
    )
};

export default WeatherTemperature;