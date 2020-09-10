import React from 'react';
import PropTypes from 'prop-types';
// import the library
// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudSun, faCloud, faCloudRain, faSnowflake, faWind} from '@fortawesome/free-solid-svg-icons'
import {
    CLOUD,
    CLOUDY,
    SUNNY,
    RAIN,
    SNOW,
    WINDY,
} from '../../../const/weather';

const icons = {
    [CLOUD]: faCloud,
    [CLOUDY]: faCloudSun,
    [SUNNY]: faSun,
    [RAIN]: faCloudRain,
    [SNOW]: faSnowflake,
    [WINDY]: faWind
}

const getFontAwesomeIcon = weatherState => {
    const icon = icons[weatherState]
    if (icon)
        return <FontAwesomeIcon icon={icon} size="lg" className="weather-icon"/>
    else 
        return <FontAwesomeIcon icon={faSun} size="lg" className="weather-icon"/>
};

const WeatherTemperature = ({temperature, weatherState}) => {
    return (
        <div>
            { getFontAwesomeIcon(weatherState) }
            <span>{` ${temperature} C`}</span>
        </div>
    )
};

// PropTypes validation
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.symbol.isRequired
}

export default WeatherTemperature;