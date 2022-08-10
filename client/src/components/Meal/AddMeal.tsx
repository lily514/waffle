import React, {FormEvent, FunctionComponent, useState} from "react";
import {ITheme} from "../../types/theme";
import {useAddMealMutation} from "../../store/api";

type AddMealProps = {
    theme: ITheme
}
export const AddMeal: FunctionComponent<AddMealProps> = ({theme}) => {
    const [name, setName] = useState<string>('')
    const [notes, setNotes] = useState<string>('')
    const [addMeal, {isLoading}] = useAddMealMutation()
    
    const isValid = () => {
        return !!name && !!theme.id
    }

    const addNewMeal = (e: FormEvent) => {
        e.preventDefault()
        addMeal({themeId: theme.id, name: name, notes: notes})
        setName('')
        setNotes('')
    }

    return (
        <div className="AddMeal">
            <p>Add a new meal to the {theme.name} category</p>
            <form onSubmit={addNewMeal} className="Add-Meal">
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
                />
                <input
                    type="text"
                    id="notes"
                    placeholder="Notes"
                    value={notes}
                    onChange={(e: FormEvent<HTMLInputElement>) => setNotes(e.currentTarget.value)}
                />
                <button disabled={!isValid() || isLoading}>
                    Add Meal
                </button>
            </form>
        </div>
    )
}