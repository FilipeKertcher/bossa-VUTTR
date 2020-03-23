import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import mainTheme from "themes/main";
import styled from "styled-components";
import Routes from "routes";
import Typography from "components/Typography";

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
    <ThemeProvider theme={mainTheme}>
      <Container>
        <div>
          <Typography tag={"h1"} variant={"Heading2"} color={"darkerPurple"}>
            VUTTR
          </Typography>
          <Typography tag={"h2"} variant={"Heading4"} color={"darkerPurple"}>
            Very Useful Tools to Remember
          </Typography>
        </div>

        <Routes />
      </Container>
    </ThemeProvider>
  );
};

export default App;
