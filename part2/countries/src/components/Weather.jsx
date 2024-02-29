import  { useState, useEffect } from 'react';
import weatherService from '../services/weather';

const Weather = ({city}) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        weatherService
            .getWeather(city)
            .then(data => {
                setWeather(data)
            })
    }, [city])
    
    return (
        <div>
            {weather &&
                <div>
                    <p>temperature {weather.temp} Celsius</p>
                    <img src={weather.icon} alt={weather.description}/>
                    <p>wind {weather.wind_speed} m/s</p>
                </div>
            }
        </div>
    )
}

export default Weather;