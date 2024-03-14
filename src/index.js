import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MainContext from "./context/MainContext";
import AuthContext from "./context/AuthContext";
import { Provider } from "react-redux";
import { Store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <AuthContext>
      <BrowserRouter>
        <MainContext>
          <App />
        </MainContext>
      </BrowserRouter>
    </AuthContext>
  </Provider>
);
