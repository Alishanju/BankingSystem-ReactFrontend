import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import { store } from "./redux/store";

import App from "./App";

import "./styles/main.scss";
import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(

    <React.StrictMode>

        <Provider store={store}>
            <ErrorBoundary>

            <App />
            </ErrorBoundary>

        </Provider>

    </React.StrictMode>

);