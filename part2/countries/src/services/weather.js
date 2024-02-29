import axios from 'axios'

const geo_url = "http://api.openweathermap.org/geo/1.0/direct?"
const weather_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&"
const icon_url = "http://openweathermap.org/img/wn/"
const api_key = import.meta.env.VITE_OPEN_WEATHER_API_KEY

const getWeather = (city) => {
    return getGeoData(city)
        .then(data => {
            console.log(data)
            return axios.get(`${weather_url}lat=${data.lat}&lon=${data.lon}&appid=${api_key}`).then(response => {
                console.log(response)
                return  {
                    temp: response.data.main.temp,
                    wind_speed: response.data.wind.speed,
                    description: response.data.weather[0].description,
                    icon: `${icon_url}${response.data.weather[0].icon}@2x.png`
                }
            })
        })
}

const getGeoData = (city) => {
    return axios.get(`${geo_url}q=${city}&limit=1&appid=${api_key}`).then(response => 
        {
            return {
                lat: response.data[0].lat,
                lon: response.data[0].lon
            }
        })
}

export default { getWeather }