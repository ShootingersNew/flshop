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
import './../src/components/fonts/__proximaNova/_black/fonts__proximaNova_black.css'
import './../src/components/fonts/__proximaNova/_bold/fonts__proximaNova_bold.css'
import './../src/components/fonts/__proximaNova/_semibold/fonts__proximaNova_semibold.css'
import './../src/components/fonts/__proximaNova/_regular/fonts__proximaNova_regular.css'
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
