import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const renderTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default renderTree;