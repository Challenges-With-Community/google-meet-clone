import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { AuthProvider } from "./context/AuthContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a73e8",
    },
    secondary: {
      main: "#ea4335",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
