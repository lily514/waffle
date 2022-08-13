import * as React from "react";
import {ITheme} from "../../types/theme";
import './ThemeListItem.css'
import {useDeleteThemeMutation} from "../../store/api";
import Button from "@mui/material/Button";

type Props = {
    theme: ITheme
}
export const ThemeListItem: React.FC<Props> = ({theme}) => {
    const [deleteTheme, {isLoading}] = useDeleteThemeMutation()
    
    return (
        <div className="ThemeListItem">
           <h2>{theme.name}</h2>
            <Button variant="contained" onClick={() => deleteTheme(theme.id)}>Delete</Button>
        </div>
    )
}