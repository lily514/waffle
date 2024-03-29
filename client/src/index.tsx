import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux"
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from "./store/reducer"
import {BrowserRouter} from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const rootElement = document.getElementById('root')
if (rootElement === null) throw new Error('Root container missing in index.html')

const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <StrictMode>
                <App/>
            </StrictMode>
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();