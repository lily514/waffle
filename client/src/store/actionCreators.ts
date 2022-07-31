import * as actionTypes from "./actionTypes"
import {ITheme, ThemeAction} from "../types/theme";
import {IMeal, MealAction} from "../types/meal";
import {ModelAction, DispatchType} from "../types/model"

export function addTheme(theme: ITheme) {
    const action: ThemeAction = {
        type: actionTypes.ADD_THEME,
        model: theme,
    }
    return simulateHttpRequest(action)
}

export function removeTheme(theme: ITheme) {
    const action: ThemeAction = {
        type: actionTypes.REMOVE_THEME,
        model: theme,
    }
    return simulateHttpRequest(action)
}

export function addMeal(meal: IMeal) {
    const action: MealAction = {
        type: actionTypes.ADD_MEAL,
        model: meal
    }
    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ModelAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}