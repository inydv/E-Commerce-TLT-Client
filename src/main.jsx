// REACT AND REACT ROUTER DOM
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// CUSTOM IMPORTS
import App from "./App";
import { UserProvider } from "./Context/User.Context";

// IMPORT STYLES
import "./index.css";

// CREATE APP
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
