import React, {FunctionComponent} from "react";
import './index.css'
import {Link} from "react-router-dom";

export const Home: FunctionComponent = () => {
    return (
        <div className="Home">
            <h1>New here? Start organizing your favorite meals into themes</h1>
            <p>Pick a theme for each weekday,</p>
            <p>and let us help you decide what to eat this week.</p>
            <Link to="/themes/new">Add new theme</Link>
        </div>
    )
}