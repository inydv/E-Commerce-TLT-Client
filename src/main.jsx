// REACT AND REACT ROUTER DOM
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// CUSTOM IMPORTS
import App from "./App";
import { UserProvider } from "./Context/User.Context";

// IMPORT STYLES
import "./index.css";
import "./Styles/MUI.Style.css";
import "./Styles/LazyLoading.Style.css";
import "./Styles/ApexChart.Style.css";
import "react-lazy-load-image-component/src/effects/blur.css";

// CREATE APP
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
