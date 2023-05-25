import React, {ChangeEvent, useEffect, useReducer, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {CounterSetting} from './components/CounterSetting';
import {Button} from "./components/Button";
import {
    changeMaxValueAC,
    changeStartValueAC,
    countReducer,
    incrementAC,
    resetAC,
    settingAC
} from "./components/countReducer";


export type InitialStateType = {
    currentValue: number
    startValue: number
    maxValue: number
    disabledInc: boolean
    disabledRes: boolean
    disabledSet: boolean
    error: string
}

const initialState = {
    currentValue: 0,
    startValue: 0,
    maxValue: 0,
    disabledInc: true,
    disabledRes: true,
    disabledSet: false,
    error: ''
}

function App() {


    const [state, dispatchState] = useReducer(countReducer, initialState)

    // const [currentValue, setCurrentValue] = useState(0)
    // const [startValue, setStartValue] = useState(0)
    // const [maxValue, setMaxValue] = useState(5)
    // const [disabledInc, setDisabledInc] = useState(true)
    // const [disabledRes, setDisabledRes] = useState(true)
    // const [disabledSet, setDisabledSet] = useState(false)
    // const [error, setError] = useState('')
    //
    // useEffect(() => {
    // const otherValues = localStorage.getItem('localValues')
    //         if (otherValues) {
    //             const [_maxValue, _startValue, _currentValue] = JSON.parse(otherValues);
    //             setMaxValue(_maxValue);
    //             setStartValue(_startValue);
    //             setCurrentValue(_currentValue)
    //         }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('localValues', JSON.stringify([maxValue, startValue, currentValue]))
    // }, [maxValue, startValue, currentValue])

    // useEffect(() => {
    //     const otherValues = localStorage.getItem('keyCounter')
    //     const count = localStorage.getItem('count')
    //     if (otherValues) {
    //         const [_maxValue, _startValue,] = JSON.parse(otherValues);
    //         setMaxValue(_maxValue);
    //         setStartValue(_startValue);
    //     }
    //     if (count) {
    //         setCurrentValue(JSON.parse(count))
    //     }
    // }, [])

    const increment = () => {
        dispatchState(incrementAC())
        //     setCurrentValue(currentValue + 1)
        //     if (currentValue === maxValue - 1) {
        //         setDisabledInc(true)
        //         setError('max value')
        //     }
        //     // localStorage.setItem('count', JSON.stringify(currentValue+ 1))
    }

    const reset = () => {
        dispatchState(resetAC())
        // setDisabledInc(false)
        // setError('')
        // setCurrentValue(startValue)
    }

    //--------------------------------Setting-------------------------------//

    const setting = () => {
        dispatchState(settingAC())
        // savedStartValue = startValue
        // setDisabledSet(true)
        // setCurrentValue(startValue)
        // setDisabledInc(false)
        // setDisabledRes(false)
        // setError('')
        // localStorage.setItem('keyCounter', JSON.stringify([maxValue, startValue]))
    }

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatchState(changeMaxValueAC(+e.currentTarget.value))
        // if (Number(e.currentTarget.value) <= startValue) {
        //     setDisabledInc(true)
        //     setDisabledRes(true)
        //     setDisabledSet(true)
        //     setError('incorrect value')
        // } else if (Number(e.currentTarget.value) !== maxValue) {
        //     setDisabledInc(true)
        //     setDisabledRes(true)
        //     setDisabledSet(false)
        //     setError("enter values and press 'set'")
        // } else {
        //     setDisabledSet(false)
        //     setError('')
        // }
        // setMaxValue(Number(e.currentTarget.value))
    }

    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatchState(changeStartValueAC(+e.currentTarget.value))
        // if (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) >= maxValue) {
        //     setDisabledInc(true)
        //     setDisabledRes(true)
        //     setDisabledSet(true)
        //     setError('incorrect value')
        // } else if (Number(e.currentTarget.value) !== startValue) {
        //     setDisabledInc(true)
        //     setDisabledRes(true)
        //     setDisabledSet(false)
        //     setError("enter values and press 'set'")
        // } else {
        //     setDisabledSet(false)
        //     setError('')
        // }
        // setStartValue(Number(e.currentTarget.value))
    }

    return (
        <div className="App">
            <CounterSetting setting={setting} maxValue={state.maxValue} startValue={state.startValue}
                            changeStartValue={changeStartValue} changeMaxValue={changeMaxValue}
                            disabledSet={state.disabledSet}
            />
            <Counter value={state.currentValue} increment={increment} reset={reset} disabledInc={state.disabledInc}
                     disabledRes={state.disabledRes} error={state.error}/>
        </div>
    );
}

export default App;
