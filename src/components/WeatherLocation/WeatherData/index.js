import React from 'react';
// import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeathererTemperature from './WeatherTemperature';

const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => {
    return (
        <div>
            <WeathererTemperature
                temperature={temperature}
                weatherState={weatherState}
            />
            <WeatherExtraInfo humidity={humidity} wind={wind}/>
        </div>
    )
};

// WeatherData.propTypes = {
//     data: PropTypes.shape({
//         temperature: PropTypes.number.isRequired,
//         weatherState: PropTypes.string.isRequired,
//         humidity: PropTypes.number.isRequired,
//         wind: PropTypes.string.isRequired
//     })
// }

export default WeatherData;