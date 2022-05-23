import React, { useEffect, useState } from 'react';

// API
import * as weatherAPI from '../../api';

// COMPONENTS
import Dropdown from '../../components/Dropdown'
import Navbar from '../../components/Navbar'
import Switch from '../../components/Switch';

// INTERFACES
import { ISelectedCity } from '../../interfaces'

// STYLES
import { Container, Display, Selectors } from './styles'

// DATA
import { cities, icon } from './data'

interface IWeather {
  temp: number | null;
  sunrise: Date | null;
  sunset: Date | null;
  icon: string;
}

const Homepage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<ISelectedCity>({name: '', lat: null, lon: null});
  const [weather, setWeather] = useState<IWeather>({temp: null, sunrise: null, sunset: null, icon: ''})
  const [isCelcius, setIsCelcius] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async (lat: number, lon: number) => {
      const { data } = await weatherAPI.getWeather(lat, lon, isCelcius);

      console.log(typeof data)

      setWeather({
        temp: data.current.temp,
        sunrise: new Date(data.current.sunrise * 1000),
        sunset: new Date(data.current.sunset * 1000),
        icon: data.current.weather[0].icon
      })
    }

    selectedCity.name.length && fetchData(selectedCity.lat as number, selectedCity.lon as number)
  }, [isCelcius, selectedCity])

  return (
    <Container>
      <Navbar />
      <Selectors>
        <Dropdown
          cities={cities}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
        <Switch first='ºC' second='ºF' setFunction={setIsCelcius} />
      </Selectors>
      <Display>
        { selectedCity.name.length ?
          weather.sunset ?
            <>
              <p>{Math.round(weather.temp as number)} {isCelcius ? 'ºC' : 'ºF'}</p>
              <img src={`https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/${icon['_' + weather.icon as keyof typeof icon]}.svg`} alt="Temperature" />
              <p>
                <span><b>Sunrise:</b> {String(weather.sunrise?.getHours()).padStart(2, '0')}:{String(weather.sunrise?.getMinutes()).padStart(2, '0')}</span>
                <span><b>Sunset:</b> {String(weather.sunset?.getHours()).padStart(2, '0')}:{String(weather.sunset?.getMinutes()).padStart(2, '0')}</span>
              </p>
            </>
          :
          <p>Weather app is under maintenance.</p>
        :
          <p>Choose a city</p>}
      </Display>
    </Container>
  )
}

export default Homepage