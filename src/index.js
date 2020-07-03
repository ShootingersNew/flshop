import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from 'react-redux'
import {store} from "./redux/store"
//comps
import Routes from "./routes"
import App from "./App";
//styles
import './index.css'
//other
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Routes/>
            </App>
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
