import { createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { devToolsEnhancer } from "redux-devtools-extension";

export const store = createStore(rootReducer, devToolsEnhancer());
