import {ITheme} from "../../types/theme";
import React, {FormEvent, FunctionComponent, useState} from "react";

type AddThemeProps = {
    saveTheme: (theme: ITheme | any) => void
}
export const AddTheme: FunctionComponent<AddThemeProps> = ({saveTheme}) => {
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
        <div className="AddTheme">
            <h1>Add a new food theme</h1>
            <p>A theme will help you categorize your meals.</p>
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
        </div>
    )
}