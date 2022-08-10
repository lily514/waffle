import React, {FunctionComponent} from "react";
import {AddTheme} from "../Theme/AddTheme";
import {ITheme} from "../../types/theme";
import {ThemeListItem} from "../Theme/ThemeListItem";
import './index.css'
import {AddMeal} from "../Meal/AddMeal";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import { create as createTheme } from '../../store/themeSlice';
import { create as createMeal } from '../../store/mealSlice';


export const Home: FunctionComponent = () => {

    const themes = useAppSelector(state => state.themes)
    const meals = useAppSelector(state => state.meals)
    const dispatch = useAppDispatch()

    const saveTheme = (name: string) => dispatch(createTheme(name))
    const saveMeal = (themeId: string, name: string, notes?: string) => dispatch(createMeal(themeId, name, notes))
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
                                theme={theme}/>
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