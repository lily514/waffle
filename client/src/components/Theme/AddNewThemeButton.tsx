import Button from "@mui/material/Button";
import React from "react";
import {useNavigate} from "react-router-dom";

const AddNewThemeButton = () => {
    const navigate = useNavigate()
    return <Button variant="contained" color="primary" onClick={() => navigate('/themes/new')}>Add new theme</Button>
}
export default AddNewThemeButton