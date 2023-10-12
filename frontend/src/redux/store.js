import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as cartReducer } from "./cartReducer/reducer";
import thunk from "redux-thunk";

const allReducer=combineReducers({
  cartReducer
})

export const store=legacy_createStore(allReducer,applyMiddleware(thunk))