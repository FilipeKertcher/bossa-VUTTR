import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import mainTheme from 'themes/main';
import Routes from 'routes';


const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
