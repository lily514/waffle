import React, {useState} from 'react';
import logo from './logo.png'
import './App.css';
import {Home} from "./components/Home";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Hello from waffles!</p>
            </header>
            <Home/>
        </div>
    );
}

export default App;
