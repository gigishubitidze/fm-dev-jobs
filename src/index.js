import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StyledThemeProvider } from "./theme/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StyledThemeProvider>
      <App />
    </StyledThemeProvider>
  </React.StrictMode>
);
