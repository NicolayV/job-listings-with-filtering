import { combineReducers } from "redux";
import { filterReducer } from "./filters/filter-reducer";
import { positionsReducer } from "./positions/position-reducer";

export const rootReducer = combineReducers({
  positions: positionsReducer,
  filters: filterReducer,
});
