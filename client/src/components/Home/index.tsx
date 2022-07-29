import React, {FunctionComponent} from "react";
import {AddTheme} from "../Theme/AddTheme";
import {ITheme, ThemeState} from "../../types/theme";
import {ThemeListItem} from "../Theme/ThemeListItem";
import {addTheme, removeTheme} from "../../store/actionCreators";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";

import './index.css'

export const Home: FunctionComponent = () => {

    const themes: readonly ITheme[] = useSelector(
        (state: ThemeState) => state.themes,
        shallowEqual
    )

    const dispatch: Dispatch<any> = useDispatch()

    const saveTheme = React.useCallback(
        (theme: ITheme) => dispatch(addTheme(theme)),
        [dispatch]
    )

    return (
        <div className="Home">
            <AddTheme saveTheme={saveTheme}/>
            <br />
            <h1>My food themes</h1>
            {
                themes.map((theme: ITheme) => (
                    <ThemeListItem
                        key={theme.id}
                        theme={theme}
                        removeTheme={removeTheme}
                    />
                ))
            }
        </div>
    )
}