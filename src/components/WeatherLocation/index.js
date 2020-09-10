import React , { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {  
    SUNNY,
    WINDY
} from '../../const/weather';

const location = "Buenos Aires,ar"
const api_key = "0d4f16b4e5e825ace10601a8eddc7ecd"
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`

const data = {
    temperature: 5,
    weaherState: SUNNY,
    humidity: 10,
    wind: "10 m/s"
}

const data2 = {
    temperature: 1,
    weaherState: WINDY,
    humidity: 20,
    wind: "30 m/s"
}

class WeatherLocation extends Component {
    constructor(){
        super();
        this.state = {
            city: "Berlín",
            data: data
        }
    }

    handleRefreshClick = () => {
        fetch(api_weather)
        
        this.setState({    
            data: data2,
        })
        console.log("Actualizado")
    }

    render(){
        const { city, data } = this.state
        return (
            <div className="weather-location">
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleRefreshClick}>Refresh</button>
            </div>
        )
    }
    
};

export default WeatherLocation;