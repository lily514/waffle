import React, {FunctionComponent} from "react";
import {AddTheme} from "../Theme/AddTheme";
import {ITheme} from "../../types/theme";
import {ThemeListItem} from "../Theme/ThemeListItem";
import './index.css'
import {AddMeal} from "../Meal/AddMeal";
import {useGetAllThemesAndMealsQuery} from "../../store/api";


export const Home: FunctionComponent = () => {
    const {data, isLoading, isFetching} = useGetAllThemesAndMealsQuery()
    console.log(data)
    
    return (
        <div className="Home">
            <AddTheme />
            <br/>
            <h1>My food themes</h1>
            {isLoading && <div>Loading</div>}
            {isFetching && <div>Fetching</div>}
            {!data?.themes ? <div>No themes</div> : data.themes.map((theme: ITheme) => {
                const themeMeals = data.meals?.filter(m => m.themeId === theme.id)
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