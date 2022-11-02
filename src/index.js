import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import "./index.css";

axios.defaults.baseURL = "http://localhost:5000/";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
