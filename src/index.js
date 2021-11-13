import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const renderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                    dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree(store.getState());

store.subscribe(renderTree);

reportWebVitals();
