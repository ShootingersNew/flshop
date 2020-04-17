import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Main} from "./pages/main/Main";
import App from "./App";

export default function Routes() {
    return (
        <Router>
            <App>
                <Route exact path={"/"}>
                    <Main>

                    </Main>
                </Route>
            </App>
        </Router>
    )

}