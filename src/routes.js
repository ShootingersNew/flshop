import React from "react";
import {Route, Switch} from "react-router-dom";
import {MainPage} from "./pages/mainPage/MainPage";
import GoodsPage from "./pages/goodsPage/GoodsPage";
import CartPage from "./pages/cartPage/CartPage";
import ListingPage from "./pages/listingPage/ListingPage";
import {useIsMobile} from "./config/utils";
import MobileSearch from "./components/mobileSearch/MobileSearch";
import MobilePopupPage from "./pages/mobilePopupPage/MobilePopupPage";
import CallModalView from "./components/modal/views/CallModalView/CallModalView";

export default function Routes() {
    const isMobile = useIsMobile();
    return (
        <Switch>
            <Route exact path={"/"}>
                <MainPage/>
            </Route>
            <Route path={'/goods/:type/:idx'} component={GoodsPage}/>
            <Route path={'/cart'} component={CartPage}/>
            <Route path={'/catalog'} component={ListingPage}/>
            {
                isMobile &&
                <>
                    <Route path={'/search'}>
                        <MobilePopupPage Comp={MobileSearch}/>
                    </Route>
                    <Route path={'/callback'}>
                        <MobilePopupPage title={'Обратный звонок'} Comp={CallModalView}/>
                    </Route>
                </>
            }
            }
        </Switch>
    )

}
