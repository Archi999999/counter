import React, {ChangeEvent, useReducer} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {CounterSetting} from './components/CounterSetting';
import {
    changeMaxValueAC,
    changeStartValueAC,
    countReducer,
    incrementAC,
    resetAC,
    settingAC
} from "./components/countReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";


export type InitialStateType = {
    currentValue: number
    startValue: number
    maxValue: number
    disabledInc: boolean
    disabledRes: boolean
    disabledSet: boolean
    error: string
}


function App() {

    // const increment = () => {
    //     dispatcn(incrementAC())
    // }
    // const reset = () => {
    //     dispatcn(resetAC())
    // }

    //--------------------------------Setting-------------------------------//

    // const setting = () => {
    //     dispatcn(settingAC())
    // }
    // const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    //     dispatcn(changeMaxValueAC(+e.currentTarget.value))
    // }
    // const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    //     dispatcn(changeStartValueAC(+e.currentTarget.value))
    // }

    return (
        <div className="App">
            <CounterSetting />
            <Counter />
        </div>
    );
}

export default App;
