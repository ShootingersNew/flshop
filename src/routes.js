import React from "react";
import {Route, Switch} from "react-router-dom";
import {MainPage} from "./pages/mainPage/MainPage";
import GoodsPage from "./pages/goodsPage/GoodsPage";
import CartPage from "./pages/cartPage/CartPage";
import ListingPage from "./pages/listingPage/ListingPage";


export default function Routes() {
    return (
                    <Switch>
                        <Route exact path={"/"}>
                            <MainPage/>
                        </Route>
                        <Route path={'/goods/:type/:idx'} component={GoodsPage}/>
                        <Route path={'/cart'} component={CartPage}/>
                        <Route path={'/catalog'} component={ListingPage}/>
                    </Switch>

    )

}