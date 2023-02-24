import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "./store";

const THEME = createTheme({
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
    fontWeightLight: 700,
    fontWeightRegular: 700,
    fontWeightMedium: 700,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={THEME}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
);
