import { combineReducers } from "redux";
import cakeReducer from "../Redux/CAkes/CakeReducer";
import iceCreamReducer from "../Redux/ICeCream/IceCreamReducer";
import userReducer from "../Redux/User/UserReducer";

const rootReducers = combineReducers({
    cake:cakeReducer,
    icecream:iceCreamReducer,
    user:userReducer
})

export default rootReducers;