import { AppContainer } from "react-hot-loader";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "../styles/style.scss";

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );

render(App);
// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept("./components/App", () => render(App));