import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import configureStore from "./store";
import "todomvc-app-css/index.css";
import "./App.css";
import "./i18n";

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
