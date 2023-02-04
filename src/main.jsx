import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Topbar from "./components/topbar/Topbar";
import "./index.css";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Topbar>
          <App />
        </Topbar>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
