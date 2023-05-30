import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./components/countReducer";

const rootReducer = combineReducers({countReducer})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store