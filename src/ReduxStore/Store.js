import { createStore, combineReducers } from "redux";
import { AuthReducer } from "./Reducer";

var reducers = combineReducers({ AuthReducer });

var store = createStore(reducers);

export default store;
