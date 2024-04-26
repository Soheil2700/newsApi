import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BASE_URL } from "./config";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
axios.defaults.baseURL = BASE_URL;
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
