import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
const renderTree = (state, func) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} func={func} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default renderTree;