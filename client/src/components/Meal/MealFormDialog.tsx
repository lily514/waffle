import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {FormEvent, useState} from "react";
import {useAddMealMutation, useAddThemeMutation} from "../../store/api";
import {ITheme} from "../../types/theme";

type AddMealProps = {
    theme: ITheme
}
export default function MealFormDialog({theme}: AddMealProps) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState<string>('')
    const [notes, setNotes] = useState<string>('')
    const [addMeal, {isLoading}] = useAddMealMutation()

    const addNewMeal = (e: FormEvent) => {
        addMeal({name, notes, themeId: theme.id})
        handleClose()
    }
    
    const handleNameChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNotes(event.target.value)
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Add meal
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new meal</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add a meal to your "{theme.name}" theme to randomize later.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Meal Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleNameChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="notes"
                        label="Notes"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleNotesChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addNewMeal}>Add Meal</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
