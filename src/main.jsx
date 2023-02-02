import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Topbar from "./components/topbar/Topbar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Topbar>
        <App />
      </Topbar>
    </BrowserRouter>
  </React.StrictMode>
);
