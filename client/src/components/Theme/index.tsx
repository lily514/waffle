import React, {FunctionComponent} from "react";
import {useGetAllThemesQuery} from "../../store/api";
import {ITheme} from "../../types/theme";
import {ThemeCard} from "./ThemeCard";
import {Link} from "react-router-dom";
import AddNewThemeButton from "./AddNewThemeButton";
import {Box, Container} from "@mui/material";
import Typography from "@mui/material/Typography";

export const Themes: FunctionComponent = () => {
    const {data: themes, isLoading, isFetching} = useGetAllThemesQuery()

    return (
        <>
            <Box display={"flex"} flex-direction={"row"} justifyContent={'justify'} sx={{mb: 5}}>
                <Typography variant="h1" sx={{mr: 2}}>My food themes</Typography>
                <AddNewThemeButton />
            </Box>
            
            <Box display={"flex"} flex-direction={"row"}>
                {isLoading && <div>Loading</div>}
                {isFetching && <div>Fetching</div>}
                {!themes 
                    ? <div>No themes</div> 
                    : themes.map((theme: ITheme) => <ThemeCard key={theme.id} theme={theme}/>)
                }
            </Box>
            
        </>
    )
}