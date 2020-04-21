import React from "react";
import { configure, addDecorator } from "@storybook/react";
import mainTheme from "../src/themes/main";
import { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import "../src/assets/main.css";

WebFont.load({
  google: {
    families: ["Source Sans Pro:400,600", "sans-serif"],
  },
});

function loadStories() {
  const req = require.context("../src/components", true, /\.stories\.tsx$/);
  req.keys().forEach((filename) => req(filename));
}

addDecorator((story) => (
  <ThemeProvider theme={mainTheme}>{story()}</ThemeProvider>
));

configure(loadStories, module);
