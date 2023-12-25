import { combineReducers } from "redux";
import {reducer as authReducer} from "../slice/auth"
import {reducer as productsReducer} from "../slice/product"
// import {reducer as paymentReducer} from "../slice/payment"
export const rootReducer = combineReducers({
    auth:authReducer,
    products:productsReducer,
    // payment:paymentReducer
})