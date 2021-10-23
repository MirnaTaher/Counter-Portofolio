import {countReducer} from "./CounterRedux";
import {todoReducer} from "./TodoRedux";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    countReducer,
    todoReducer
});

export default allReducers;