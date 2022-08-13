import React, {FunctionComponent} from "react";
import AddNewThemeButton from "../Theme/AddNewThemeButton";
import Typography from "@mui/material/Typography";
import logo from "../../logo.png";
import Box from "@mui/material/Box";

export const Home: FunctionComponent = () => {
    return (
        <Box className="Home">
            <img src={logo} className="App-logo" alt="logo"/>
            <Typography variant={"h1"} >Meet Waffle</Typography>
            <Typography variant={"h2"} >Start organizing your favorite meals into themes.</Typography>
            <Typography variant={"h3"} >Pick a theme for each weekday, and let us help you decide what to eat this week.</Typography>
            <AddNewThemeButton />
        </Box>
    )
}