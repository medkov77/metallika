import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.scss";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state";
import { store } from "./store";
import "./main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App state={state} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
