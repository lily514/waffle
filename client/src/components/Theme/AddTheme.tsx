import React, {FormEvent, FunctionComponent, useState} from "react";

type AddThemeProps = {
    saveTheme: (name: string) => void
}
export const AddTheme: FunctionComponent<AddThemeProps> = ({saveTheme}) => {
    const [name, setName] = useState<string>('')

    const addNewTheme = (e: FormEvent) => {
        e.preventDefault()
        saveTheme(name)
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
                <button disabled={name === undefined || name === ''}>
                    Add theme
                </button>
            </form>
        </div>
    )
}