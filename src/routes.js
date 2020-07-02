import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {MainPage} from "./pages/mainPage/MainPage";
import Goods from "./pages/good/Goods";
import App from "./App";
import CartPage from "./pages/cartPage/CartPage";
import ListingPage from "./pages/listingPage/ListingPage";
import {ThroughProvider} from 'react-through';


export default function Routes() {
    return (
        <ThroughProvider>
            <Router>
                <App>
                    {/*хедер и футер здесь для того, чтобы не рендерить их на определенных страницах при необходимости*/}
                    <Switch>
                        <Route exact path={"/"}>
                            <MainPage/>
                        </Route>
                        <Route path={'/goods/:type/:idx'} component={Goods}/>
                        <Route path={'/cart'} component={CartPage}/>
                        <Route path={'/catalog'} component={ListingPage}/>
                    </Switch>
                </App>
            </Router>
        </ThroughProvider>
    )

}