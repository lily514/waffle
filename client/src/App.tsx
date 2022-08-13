import React from 'react';
import logo from './logo.png'
import './App.css';
import {Home} from "./components/Home";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import {Themes} from "./components/Theme";
import {AddTheme} from "./components/Theme/AddTheme";
import {createTheme, ThemeOptions, ThemeProvider} from "@mui/material";
import NavBar from "./components/NavBar";

export const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#892833',
        },
        secondary: {
            main: '#FBD11E',
        },
    },
};

const theme = createTheme(themeOptions)

export default function App() {
    return (
        <ThemeProvider theme={theme}>
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/themes" element={<Themes/>}/>
                <Route path="/themes/new" element={<AddTheme/>}/>
            </Routes>
        </div>
        </ThemeProvider>
    );
}
