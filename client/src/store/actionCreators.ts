import * as actionTypes from "./actionTypes"
import {DispatchType, ITheme, ThemeAction} from "../types/theme";

export function addTheme(theme: ITheme) {
    const action: ThemeAction = {
        type: actionTypes.ADD_THEME,
        theme,
    }

    return simulateHttpRequest(action)
}

export function removeTheme(theme: ITheme) {
    const action: ThemeAction = {
        type: actionTypes.REMOVE_THEME,
        theme,
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ThemeAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}