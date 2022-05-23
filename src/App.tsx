import React from 'react';
import { ThemeProvider } from "styled-components";

// PAGES
import Homepage from './pages/Homepage';

// STYLES
import GlobalStyle from "./styles/global";
import { globalTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
    <GlobalStyle />
    <Homepage />
  </ThemeProvider>
  );
}

export default App;
