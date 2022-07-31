import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {createStore, applyMiddleware, Store} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import reducer from "./store/reducer"
import {ModelState, ModelAction, DispatchType} from './types/model'

const store: Store<ModelState, ModelAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById('root')
if (rootElement === null) throw new Error('Root container missing in index.html')

const root = createRoot(rootElement);
root.render(
    <Provider store={store}>
        <StrictMode>
            <App/>
        </StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();