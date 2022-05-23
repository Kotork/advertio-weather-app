import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme'

export default createGlobalStyle<{ theme: ThemeType }>`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;700&display=swap');

  // Scrollbar styles
  ::-webkit-scrollbar {
    width: 8px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => `${theme.colors.background}70`};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => `${theme.colors.background}90`};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    transition: all 0.4s ease-in-out;
  }

  html {
    font-size: 62.5%;
  }

  @media (max-width: 520px) {
    html {
      font-size: 50%
    }
  }

  @media (max-width: 520px) {
    html {
      font-size: 40%
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-weight: 700;
    text-transform: capitalize;
  }

  button {
    cursor: pointer;
  }
`;