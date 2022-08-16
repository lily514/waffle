import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {FormEvent, useState} from "react";
import {useAddThemeMutation} from "../../store/api";

export default function ThemeFormDialog() {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState<string>('')
    const [addTheme, {isLoading}] = useAddThemeMutation()

    const addNewTheme = (e: FormEvent) => {
        addTheme(name)
        handleClose()
    }
    
    const handleNameChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setName(event.target.value)
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
                Add new theme
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new theme</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        A theme will help you categorize your meals.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Theme Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleNameChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addNewTheme}>Add Theme</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
