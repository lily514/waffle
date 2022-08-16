import * as React from "react";
import {ITheme} from "../../types/theme";
import {useDeleteThemeMutation} from "../../store/api";
import {Card, CardContent, CardActions, Button, Typography} from "@mui/material";
import MealFormDialog from "../Meal/MealFormDialog";
import {IMeal} from "../../types/meal";

type Props = {
    theme: ITheme,
    meals: IMeal[]
}
export const ThemeCard: React.FC<Props> = ({theme, meals}) => {
    const [deleteTheme, {isLoading}] = useDeleteThemeMutation()

    return (
        <Card sx={{
            padding: 2,
            mr: 2,
            mb: 2
        }}>
            <CardContent>
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        display: {xs: 'none', md: 'flex'},
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    {theme.name}
                </Typography>
                {meals.length > 0 && <ul>{meals.map(m => <li key={m.name}>{m.name}</li>)}</ul>}
            </CardContent>
            <CardActions>
                <MealFormDialog theme={theme}/>
                <Button variant="text" onClick={() => deleteTheme(theme.id)}>Delete</Button>
            </CardActions>
            
        </Card>
    )
}