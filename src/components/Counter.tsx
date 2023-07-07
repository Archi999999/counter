import React from 'react';
import { Display } from './Display';
import s from './styles/counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {incrementAC, resetAC} from "./countReducer";
import {AppRootStateType} from "../store";
import {InitialStateType} from "../App";

export const Counter:React.FC = () => {
    const dispatch = useDispatch()
    const {disabledInc, disabledRes} = useSelector<AppRootStateType,  InitialStateType>(state=> state.counter)

    const onIncHandler = () => {
        dispatch(incrementAC())
    }

    const onResHandler = () => {
        dispatch(resetAC())
    }

    return (
        <div className={s.counter}>
            <Display />
            <div className={s.buttonsBlock} >
                <button onClick={onIncHandler} disabled={disabledInc}>inc</button>
                <button onClick={onResHandler} disabled={disabledRes}>reset</button>
            </div>
        </div>
    );
};

