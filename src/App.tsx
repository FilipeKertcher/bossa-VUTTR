import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import mainTheme from "themes/main";
import styled from "styled-components";
import Routes from "routes";
import { Provider } from "react-redux";
import rootStore from "stores/rootStore";
// @ts-ignore
import ReactNotifications from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const Container = styled.div`
  background-color: ${mainTheme.colors.lighestInk};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Provider store={rootStore}>
      <ThemeProvider theme={mainTheme}>
        <Container>
          <ReactNotifications />
          <Routes />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
