import React from 'react';

const WeatherExtraInfo = ({humidity, wind}) => {
    return (
        // Template string or template literals
        <div>
            <span>{`${humidity}% - `}</span>
            <span>{`${wind} wind`}</span>
        </div>
    )
};

export default WeatherExtraInfo;