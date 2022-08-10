import React, {FunctionComponent} from "react";
import {AddTheme} from "../Theme/AddTheme";
import {ITheme} from "../../types/theme";
import {ThemeListItem} from "../Theme/ThemeListItem";
import './index.css'
import {AddMeal} from "../Meal/AddMeal";
import {useGetAllThemesQuery, useGetAllMealsQuery} from "../../store/api";


export const Home: FunctionComponent = () => {
    const {data: themes, isLoading: isLoadingThemes, isFetching: isFetchingThemes} = useGetAllThemesQuery()
    const {data: meals, isLoading: isLoadingMeals, isFetching: isFetchingMeals} = useGetAllMealsQuery()
    
    const isLoading = isLoadingMeals || isLoadingThemes
    const isFetching = isFetchingMeals || isFetchingThemes
    
    return (
        <div className="Home">
            <AddTheme />
            <br/>
            <h1>My food themes</h1>
            {isLoading && <div>Loading</div>}
            {isFetching && <div>Fetching</div>}
            {!themes ? <div>No themes</div> : themes.map((theme: ITheme) => {
                const themeMeals = meals?.filter(m => m.themeId === theme.id)
                return (
                    <div key={theme.id}>
                        <ThemeListItem
                            theme={theme}/>
                        <AddMeal theme={theme}/>
                        {!!themeMeals && themeMeals.length > 0 &&
                            <ul>
                                {themeMeals.map(m => <li
                                    key={`theme-${theme.id}-meal-${m.id}`}>{m.name}: {m.notes}</li>)}
                            </ul>
                        }
                    </div>
                )
            })
            }
        </div>
    )
}