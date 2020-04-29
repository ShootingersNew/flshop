import {combineReducers} from "redux";
import goodsReducer from "./goodsReducer";
import cartReducer from "./cartReducer/cartReducer";

export const rootReducer = combineReducers({
    goods: goodsReducer,
    cart: cartReducer,
});