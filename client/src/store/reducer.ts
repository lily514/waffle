import * as actionTypes from "./actionTypes"
import {ThemeState, ThemeAction, ITheme} from "../types/theme";

const initialState: ThemeState = {
   themes : [
        {
            id: 1,
            name: "waffles"
        },
        {
            id: 2,
            name: "tacos"
        }
    ]
}

const reducer = (
    state: ThemeState = initialState,
    action: ThemeAction
): ThemeState => {
    switch (action.type) {
        case actionTypes.ADD_THEME:
            const newTheme: ITheme = {
                id: Math.random(), // not really unique
                name: action.theme.name
            }
            return {
                ...state,
                themes: state.themes.concat(newTheme),
            }
        case actionTypes.REMOVE_THEME:
            const updatedThemes: ITheme[] = state.themes.filter(
                theme => theme.id !== action.theme.id
            )
            return {
                ...state,
                themes: updatedThemes,
            }
    }
    return state
}

export default reducer