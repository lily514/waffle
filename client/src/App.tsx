import React from 'react';
import {Home} from "./components/Home";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import {Themes} from "./components/Theme";
import {AddTheme} from "./components/Theme/AddTheme";
import {Box, createTheme, ThemeOptions, ThemeProvider, responsiveFontSizes} from "@mui/material";
import NavBar from "./components/NavBar";
import {WeeklyPlan} from "./components/Plan";

export const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#892833',
            dark: '#56000d',
            light: '#bd575c'
        },
        secondary: {
            main: '#FBD11E',
            dark: '#c4a100',
            light: '#ffff5c'
        },
    },
    typography: {
        fontFamily: 'Roboto',
        h1: {
            fontSize: '4rem',
            paddingBottom: '1rem'
        },
        h2: {
            fontSize: '3rem',
            paddingBottom: '1rem',
        },
        h3: {
            fontSize: '2rem',
            paddingBottom: '1rem',
        },
        h4: {
            fontSize: '1.5rem',
            paddingBottom: '1rem',
        }
    }
};

let theme = createTheme(themeOptions)
theme = responsiveFontSizes(theme)

export default function App() {
    return (
        <ThemeProvider theme={theme}>
        <Box className="App" height="100vh" display="flex" flexDirection="column">
            <NavBar />
            <Box flex={1} overflow="auto" sx={{
                padding: 5,
                backgroundColor: 'WhiteSmoke'
            }}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/themes" element={<Themes/>}/>
                <Route path="/themes/new" element={<AddTheme/>}/>
                <Route path="/plan" element={<WeeklyPlan/>}/>
            </Routes>
            </Box>
        </Box>
        </ThemeProvider>
    );
}
