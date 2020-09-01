import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeathererTemperature from './WeatherTemperature';
import { SUNNY } from '../const/weather';

const WeatherData = () => (
    <div>
        <WeathererTemperature
            temperature={20}
            weatherState={SUNNY}
        />
        <WeatherExtraInfo humidity={70} wind={"10 m/s"}/>
    </div>
);

export default WeatherData;