import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./ReduxStore/Store";
import { Provider } from "react-redux";
import mystore from "./ReduxStore/Store";

ReactDOM.render(
  <Provider store={mystore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
