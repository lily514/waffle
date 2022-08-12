import React, {FormEvent, FunctionComponent, useState} from "react";
import {useAddThemeMutation} from "../../store/api";

export const AddTheme: FunctionComponent = () => {
    const [name, setName] = useState<string>('')
    const [addTheme, {isLoading}] = useAddThemeMutation()
    
    const addNewTheme = (e: FormEvent) => {
        e.preventDefault()
        addTheme(name)
        setName('')
    }

    return (
        <div className="AddTheme">
            <h1>Add a new food theme</h1>
            <p>A theme will help you categorize your meals.</p>
            <form onSubmit={addNewTheme} className="Add-theme">
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    onChange={(e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
                />
                <button disabled={name === undefined || name === '' || isLoading}>
                    Add theme
                </button>
            </form>
            <p>Need ideas? Use one of our default themes: Mexican Food</p>
        </div>
    )
}