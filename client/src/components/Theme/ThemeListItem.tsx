import * as React from "react";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {ITheme} from "../../types/theme";

import './ThemeListItem.css'

type Props = {
    theme: ITheme
    removeTheme: (theme: ITheme) => void
}
export const ThemeListItem: React.FC<Props> = ({theme, removeTheme}) => {
    const dispatch: Dispatch<any> = useDispatch()
    
    const deleteTheme = React.useCallback(
        (theme: ITheme) => dispatch(removeTheme(theme)),
        [dispatch, removeTheme]
    )

    return (
        <div className="ThemeListItem">
           <h2>{theme.name}</h2>
            <button onClick={() => deleteTheme(theme)}>Delete</button>
        </div>
    )
}