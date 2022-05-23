import axios from 'axios';

const weatherAPI = axios.create({
  baseURL: 'https://api.openweathermap.org/data/3.0'
})

export const getWeather = (lat: number, lon: number, isCelcius: boolean) => weatherAPI.get(`onecall?lat=${lat}&lon=${lon}&units=${isCelcius ? 'metric' : 'imperial'}&appid=${process.env.REACT_APP_API_WEATHER_KEY}`)