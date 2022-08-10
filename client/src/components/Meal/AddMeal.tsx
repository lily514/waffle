import React, {FormEvent, FunctionComponent, useState} from "react";
import {ITheme} from "../../types/theme";

type AddMealProps = {
    saveMeal: (themeId: string, name: string, notes?: string) => void
    theme: ITheme
}
export const AddMeal: FunctionComponent<AddMealProps> = ({saveMeal, theme}) => {
    const [name, setName] = useState<string>('')
    const [notes, setNotes] = useState<string | undefined>(undefined)
    
    const isValid = () => {
        return !!name && !!theme.id
    }

    const addNewMeal = (e: FormEvent) => {
        e.preventDefault()
        saveMeal(theme.id, name, notes)
        setName('')
        setNotes(undefined)
    }

    return (
        <div className="AddMeal">
            <p>Add a new meal to the {theme.name} category</p>
            <form onSubmit={addNewMeal} className="Add-Meal">
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    onChange={(e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
                />
                <input
                    type="text"
                    id="notes"
                    placeholder="Notes"
                    onChange={(e: FormEvent<HTMLInputElement>) => setNotes(e.currentTarget.value)}
                />
                <button disabled={!isValid()}>
                    Add Meal
                </button>
            </form>
        </div>
    )
}