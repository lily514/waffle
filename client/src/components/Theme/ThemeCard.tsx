import * as React from "react";
import {ITheme} from "../../types/theme";
import {useDeleteThemeMutation} from "../../store/api";
import {Card, CardContent, CardActions, Button, Typography} from "@mui/material";

type Props = {
    theme: ITheme
}
export const ThemeCard: React.FC<Props> = ({theme}) => {
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
            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={() => console.log('TODO')}>Edit Meals</Button>
                <Button variant="text" onClick={() => deleteTheme(theme.id)}>Delete</Button>
            </CardActions>
        </Card>
    )
}