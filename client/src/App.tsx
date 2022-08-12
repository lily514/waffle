import React from 'react';
import logo from './logo.png'
import './App.css';
import {Home} from "./components/Home";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import {Themes} from "./components/Theme";
import {AddTheme} from "./components/Theme/AddTheme";

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Hello from waffles!</p>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/themes">Themes</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/themes" element={<Themes/>}/>
                <Route path="/themes/new" element={<AddTheme/>}/>
            </Routes>
        </div>
    );
}
