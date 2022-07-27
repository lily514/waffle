import React, {useState, useEffect} from 'react';
import logo from './logo.png'
import './App.css';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {addTheme, removeTheme} from "./store/actionCreators";
import {ThemeListItem} from "./components/ThemeListItem";
import {AddTheme} from "./components/AddTheme";
import {ITheme, ThemeState} from "./types/theme";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    const themes: readonly ITheme[] = useSelector(
        (state: ThemeState) => state.themes,
        shallowEqual
    )

    const dispatch: Dispatch<any> = useDispatch()

    const saveTheme = React.useCallback(
        (theme: ITheme) => dispatch(addTheme(theme)),
        [dispatch]
    )

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>{!data ? "Loading..." : data}</p>
            </header>
            <AddTheme saveTheme={saveTheme} />
            {themes.map((theme: ITheme) => (
                <ThemeListItem
                    key={theme.id}
                    theme={theme}
                    removeTheme={removeTheme}
                />
            ))}
        </div>
    );
}

export default App;
