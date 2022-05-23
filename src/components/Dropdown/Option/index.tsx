import React from 'react'

// INTERFACES
import { ISelectedCity } from '../../../interfaces'

// STYLES
import { Container } from './styles'

interface IOption {
  id: string;
  name: string;
  value: string;
  lat: number;
  lon: number;
  setSelectedCity:  React.Dispatch<React.SetStateAction<ISelectedCity>>;
}

const Option: React.FC<IOption> = ({ id, name, value, lat, lon, setSelectedCity }) => {
  const handleClick = () => {
    setSelectedCity({
      name: value,
      lat,
      lon
    })
  }

  return (
    <Container onClick={handleClick}>
      <input type="radio" className="radio" id={id} name={name} />
      <label htmlFor={id}>{value}</label>
    </Container>
  )
}

export default Option