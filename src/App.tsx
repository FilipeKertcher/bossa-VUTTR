import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import mainTheme from "themes/main";
import styled from "styled-components";
import Routes from "routes";

const Container = styled.div`
  background-color: #464646;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  );
};

export default App;
