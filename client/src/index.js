import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Calender from "./components/Home/Calender";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  rootElement
);