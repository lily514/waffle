import * as actionTypes from "./actionTypes"
import {ITheme} from "../types/theme";
import {ModelState, ModelAction} from "../types/model";
import {IMeal} from "../types/meal";

const initialState: ModelState = {
    themes: [
        {
            id: 1,
            name: "waffles"
        },
        {
            id: 2,
            name: "tacos"
        }
    ],
    meals: [
        {
            id: 1,
            themeId: 1,
            name: "Belgian",
            notes: "Served with fruit and whip cream"
        },
        {
            id: 2,
            themeId: 1,
            name: "Bubble",
            notes: "Served in a cone with ice cream"
        },
        {
            id: 3,
            themeId: 2,
            name: "Fish",
            notes: "Corn tortilla, white fish, sauce, slaw"
        },
        {
            id: 4,
            themeId: 2,
            name: "American Chicken",
            notes: "Flour tortilla, grilled chicken, lettuce, salsa, sour cream"
        },
        {
            id: 5,
            themeId: 2,
            name: "Street Taco",
            notes: "Corn tortilla, cilantro, onion, steak"
        },
    ]
}

const reducer = (
    state: ModelState = initialState,
    action: ModelAction
): ModelState => {
    switch (action.type) {
        case actionTypes.ADD_THEME:
            const newTheme: ITheme = {
                id: Math.random(), // not really unique
                name: (action.model as ITheme).name
            }
            return {
                ...state,
                themes: state.themes.concat(newTheme),
            }
        case actionTypes.REMOVE_THEME:
            const updatedThemes: ITheme[] = state.themes.filter(
                theme => theme.id !== action.model.id
            )
            return {
                ...state,
                themes: updatedThemes,
            }
        case actionTypes.ADD_MEAL:
            const newMeal: IMeal = {
                id: Math.random(), // not really unique
                name: (action.model as IMeal).name,
                notes: (action.model as IMeal).notes,
                themeId: (action.model as IMeal).themeId,
            }
            return {
                ...state,
                meals: state.meals.concat(newMeal),
            }
    }
    return state
}

export default reducer