import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import Provider from "./context/Provider";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Provider>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
