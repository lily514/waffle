import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import {ITheme} from "../types/theme";

type Props = {
    theme: ITheme
    removeTheme: (theme: ITheme) => void
}

export const ThemeListItem: React.FC<Props> = ({ theme, removeTheme }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const deleteTheme = React.useCallback(
        (theme: ITheme) => dispatch(removeTheme(theme)),
        [dispatch, removeTheme]
    )

    return (
        <div className="Theme">
            <div>
                <h1>{theme.name}</h1>
            </div>
            <button onClick={() => deleteTheme(theme)}>Delete</button>
        </div>
    )
}