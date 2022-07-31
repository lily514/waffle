import React, {FunctionComponent} from "react";
import {AddTheme} from "../Theme/AddTheme";
import {ITheme} from "../../types/theme";
import {ThemeListItem} from "../Theme/ThemeListItem";
import {addTheme, removeTheme, addMeal} from "../../store/actionCreators";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import './index.css'
import {AddMeal} from "../Meal/AddMeal";
import {IMeal} from "../../types/meal";
import {ModelState} from '../../types/model'

export const Home: FunctionComponent = () => {

    const themes: readonly ITheme[] = useSelector(
        (state: ModelState) => state.themes,
        shallowEqual
    )
    const meals: readonly IMeal[] = useSelector(
        (state: ModelState) => state.meals,
        shallowEqual
    )

    const dispatch: Dispatch<any> = useDispatch()

    const saveTheme = React.useCallback(
        (theme: ITheme) => dispatch(addTheme(theme)),
        [dispatch]
    )

    const saveMeal = React.useCallback(
        (meal: IMeal) => dispatch(addMeal(meal)),
        [dispatch]
    )

    return (
        <div className="Home">
            <AddTheme saveTheme={saveTheme}/>
            <br/>
            <h1>My food themes</h1>
            {
                themes.map((theme: ITheme) => {
                    const themeMeals = meals.filter(m => m.themeId === theme.id)
                    return (
                        <div key={theme.id}>
                            <ThemeListItem
                                theme={theme}
                                removeTheme={removeTheme}/>
                            <AddMeal saveMeal={saveMeal} theme={theme}/>
                            {themeMeals.length > 0 &&
                                <ul>
                                    {themeMeals.map(m => <li key={`theme-${theme.id}-meal-${m.id}`}>{m.name}: {m.notes}</li>)}
                                </ul>
                            }
                        </div>
                    )
                })

            }
        </div>
    )
}