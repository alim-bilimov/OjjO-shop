import { createStore, combineReducers } from "redux";
import { CountRedusers } from "./reduser/Redusers";

export const Store = createStore(
  combineReducers({
    count: CountRedusers,
  })
);
