import React, {FormEvent, FunctionComponent, useState} from "react";
import {useAddThemeMutation} from "../../store/api";
import Button from "@mui/material/Button";
import {FormControl, FormGroup, Input, InputLabel, FormHelperText} from "@mui/material";
import Box from "@mui/material/Box";

export const AddTheme: FunctionComponent = () => {
    const [name, setName] = useState<string>('')
    const [addTheme, {isLoading}] = useAddThemeMutation()

    const addNewTheme = (e: FormEvent) => {
        e.preventDefault()
        addTheme(name)
        setName('')
    }

    return (
        <Box className="AddTheme" width={1/2}>
            <h1>Add a new food theme</h1>
            <p>A theme will help you categorize your meals.</p>
            <FormGroup>
                <FormControl>
                    <InputLabel htmlFor="theme-name-input">Theme Name</InputLabel>
                    <Input id="theme-name-input"
                           aria-describedby="theme-name-helper-text"
                           onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setName(event.target.value)}
                    />
                    <FormHelperText id="theme-name-helper-text">Name of a category of foods you commonly eat, such
                        as "Tacos" or "Pasta".</FormHelperText>
                </FormControl>
                <Button disabled={name === undefined || name === '' || isLoading} onClick={addNewTheme}>
                    Add theme
                </Button>
            </FormGroup>
        </Box>
    )
}