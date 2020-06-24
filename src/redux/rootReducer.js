import {combineReducers} from "redux";
import cartReducer from "./cartReducer/cartReducer";
import bannersReducer from "./bannersReducer";

export const rootReducer = combineReducers({
    cart: cartReducer,
    banners: bannersReducer,
});