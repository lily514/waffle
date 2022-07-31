import {IMeal} from "../../types/meal";
import React, {FormEvent, FunctionComponent, useState} from "react";
import {ITheme} from "../../types/theme";

type AddMealProps = {
    saveMeal: (Meal: IMeal) => void
    theme: ITheme
}
export const AddMeal: FunctionComponent<AddMealProps> = ({saveMeal, theme}) => {
    const [meal, setMeal] = useState<IMeal>({themeId: theme.id})

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        setMeal({
            ...meal,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    const isValid = () => {
        return !!meal && !!meal.name && !!meal.themeId
    }

    const addNewMeal = (e: FormEvent) => {
        e.preventDefault()
        saveMeal(meal)
        setMeal({themeId: theme.id})
    }

    return (
        <div className="AddMeal">
            <p>Add a new meal to the {theme.name} category</p>
            <form onSubmit={addNewMeal} className="Add-Meal">
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    onChange={onChange}
                />
                <input
                    type="text"
                    id="notes"
                    placeholder="Notes"
                    onChange={onChange}
                />
                <button disabled={!isValid()}>
                    Add Meal
                </button>
            </form>
        </div>
    )
}