import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {ThemeProvider} from "@material-ui/core";
import {createTheme} from "@material-ui/core/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#1a73e8',
        },
        secondary: {
            main: '#ea4335',
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
