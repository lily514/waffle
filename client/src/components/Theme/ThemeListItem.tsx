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

    const deleteTheme = (id: number) => dispatch(remove(id))

    return (
        <div className="ThemeListItem">
           <h2>{theme.name}</h2>
            <button onClick={() => deleteTheme(theme.id)}>Delete</button>
        </div>
    )
}