import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import "./index.css";

axios.defaults.baseURL = "https://todo-rest-api-node.herokuapp.com/";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

reportWebVitals();
