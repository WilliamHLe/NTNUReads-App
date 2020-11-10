import {createStore, combineReducers} from "redux";
import {themeReducer} from "./theme/ThemeReducer";

/**
 * Redux root store - Redux setup is designed to make it easy to expand later
 * As of now, we only have one state stored
 */

export const rootReducer = combineReducers({ themeReducer })
//rootReducer will include all our reducers if we expand

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
