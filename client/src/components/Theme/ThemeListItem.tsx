import * as React from "react";
import {ITheme} from "../../types/theme";
import './ThemeListItem.css'
import {useAppDispatch} from "../../store/hooks";
import {remove} from '../../store/themeSlice';

type Props = {
    theme: ITheme
}
export const ThemeListItem: React.FC<Props> = ({theme}) => {
    
    const dispatch = useAppDispatch()

    const deleteTheme = (theme: ITheme) => {
        dispatch(remove(theme.id))
    }

    return (
        <div className="ThemeListItem">
           <h2>{theme.name}</h2>
            <button onClick={() => deleteTheme(theme)}>Delete</button>
        </div>
    )
}