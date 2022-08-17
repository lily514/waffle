import * as React from "react";
import {ITheme} from "../../types/theme";
import {useDeleteThemeMutation, useDeleteMealMutation} from "../../store/api";
import {
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
    List,
    ListItem,
    ListItemText,
    CardHeader
} from "@mui/material";
import MealFormDialog from "../Meal/MealFormDialog";
import {IMeal} from "../../types/meal";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";


type Props = {
    theme: ITheme,
    meals: IMeal[]
}
export const ThemeCard: React.FC<Props> = ({theme, meals}) => {
    const [deleteTheme] = useDeleteThemeMutation()
    const [deleteMeal] = useDeleteMealMutation()

    return (
        <Card sx={{height: 1}}>
            <CardContent>
                <CardHeader 
                    title={
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                            {theme.name}
                    </Typography>} 
                    action={<Button variant="text" onClick={() => deleteTheme(theme.id)}>Delete</Button>}
                />
                {meals.length > 0 ?
                    <List>
                        {meals.map(m =>
                            <ListItem key={m.name} secondaryAction={
                                <IconButton edge="end" aria-label="delete" onClick={() => deleteMeal(m.id)}>
                                    <DeleteIcon/>
                                </IconButton>}>
                                <ListItemText primary={m.name} secondary={m.notes ?? null}/>
                            </ListItem>)}
                    </List> : <Typography sx={{pl: 2}}>No meals yet.</Typography>}
                <CardActions sx={{flex: "bottom"}}>
                    <MealFormDialog theme={theme}/>
                </CardActions>
            </CardContent>
            

        </Card>
    )
}
