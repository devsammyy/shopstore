import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/material";

const THEME = createTheme({
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 800,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
