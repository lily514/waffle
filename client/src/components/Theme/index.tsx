import React, {FunctionComponent} from "react";
import {useGetAllThemesAndMealsQuery} from "../../store/api";
import {ITheme} from "../../types/theme";
import {ThemeCard} from "./ThemeCard";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import ThemeFormDialog from "./ThemeFormDialog";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

export const Themes: FunctionComponent = () => {
    const {data, isLoading, isFetching} = useGetAllThemesAndMealsQuery()

    return (
        <>
            <Box display={"flex"} flex-direction={"row"} justifyContent={'justify'} sx={{mb: 5}}>
                <Typography variant="h1" sx={{mr: 2}}>My food themes</Typography>
                <ThemeFormDialog />
            </Box>
            <Grid2 container spacing={2}>
                {isLoading && <div>Loading</div>}
                {isFetching && <div>Fetching</div>}
                {!data?.themes 
                    ? <div>No themes</div> 
                    : data.themes.map((theme: ITheme) => 
                        <Grid2 xs={4}>
                            <ThemeCard key={theme.id} theme={theme} meals={data.meals.filter(m => m.themeId === theme.id)}/>
                        </Grid2>)
                }
            </Grid2>
            
        </>
    )
}