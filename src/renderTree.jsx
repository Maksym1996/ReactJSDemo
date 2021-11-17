import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";

const renderTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default renderTree;