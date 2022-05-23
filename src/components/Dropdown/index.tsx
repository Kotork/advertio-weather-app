import React, { useState } from 'react'
import Option from './Option';

// INTERFACES
import { ICity, ISelectedCity } from '../../interfaces'

// STYLES
import { Container } from './styles'

interface IDropdown {
  cities: Array<ICity>;
  selectedCity: ISelectedCity;
  setSelectedCity: React.Dispatch<React.SetStateAction<ISelectedCity>>;
}

const Dropdown: React.FC<IDropdown> = ({ cities, selectedCity, setSelectedCity }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleIsSelected = () => {setIsSelected(prevState => !prevState)}

  return (
    <Container isSelected={isSelected}>
      <div onClick={() => setIsSelected(prevState => !prevState)}>
        <span>{ !!selectedCity.name ? selectedCity.name : 'Select a city' }</span>
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
      </div>

      <div onClick={handleIsSelected} >
        { cities.map((city, i) => Object.keys(city)[0] !== selectedCity.name &&
          <Option
            key={i} id={`${i}`}
            name='city'
            value={Object.keys(city)[0]}
            setSelectedCity={setSelectedCity}
            lat={city[Object.keys(city)[0]].lat}
            lon={city[Object.keys(city)[0]].lon}
          />
        )}
      </div>
    </Container>
  )
}

export default Dropdown