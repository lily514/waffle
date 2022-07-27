import React, {FunctionComponent, useState, FormEvent} from "react"
import {ITheme} from "../types/theme"

type AddThemeProps = {
    saveTheme: (theme: ITheme | any) => void
}

export const AddTheme: FunctionComponent<AddThemeProps> = ({ saveTheme }) => {
    const [theme, setTheme] = useState<ITheme | {}>()
    
    const onChange = (e: FormEvent<HTMLInputElement>) => {
        setTheme({
            ...theme,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }
    
    const addNewTheme = (e: FormEvent) => {
        e.preventDefault()
        saveTheme(theme)
        setTheme(undefined)
    }

    return (
        <form onSubmit={addNewTheme} className="Add-theme">
            <input
                type="text"
                id="name"
                placeholder="Name"
                onChange={onChange}
            />
            <button disabled={theme === undefined}>
                Add theme
            </button>
        </form>
    )
}