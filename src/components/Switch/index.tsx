import React from 'react'

// STYLES
import { Button, Container } from './styles'

interface ISwitch {
  first: string;
  second: string;
  setFunction: React.Dispatch<React.SetStateAction<boolean>>;
}

const Switch: React.FC<ISwitch> = ({ first, second, setFunction }) => {
  return (
    <Container>
      <span>{ first }</span>
      <Button>
        <input type="checkbox" id="switch" />
        <label htmlFor="switch" onClick={() => setFunction(prevState => !prevState)}></label>
      </Button>
      <span>{ second }</span>
    </Container>
  )
}

export default Switch