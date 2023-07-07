import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./components/countReducer";
import thunk from "redux-thunk"
import {loadState, saveState} from "./utils/localStorage-utils";

const rootReducer = combineReducers({
    counter: countReducer})


// 1ый вариант
// let preloadedState;

// const persistedTodosString = localStorage.getItem('app-state')
// if (persistedTodosString) {
//     preloadedState = JSON.parse(persistedTodosString)
// }


export const store = legacy_createStore(rootReducer, /*{preloadedState} 1ый вариант */ loadState(), applyMiddleware(thunk))

store.subscribe(()=>{
// 1ый вариант   localStorage.setItem('app-state', JSON.stringify(store.getState()))

    saveState({
        counter: store.getState().counter
    })
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store