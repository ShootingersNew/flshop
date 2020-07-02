import React from "react";
import {Route, Switch} from "react-router-dom";
import {MainPage} from "./pages/mainPage/MainPage";
import Goods from "./pages/good/Goods";
import CartPage from "./pages/cartPage/CartPage";
import ListingPage from "./pages/listingPage/ListingPage";


export default function Routes() {
    return (
                    <Switch>
                        <Route exact path={"/"}>
                            <MainPage/>
                        </Route>
                        <Route path={'/goods/:type/:idx'} component={Goods}/>
                        <Route path={'/cart'} component={CartPage}/>
                        <Route path={'/catalog'} component={ListingPage}/>
                    </Switch>

    )

}