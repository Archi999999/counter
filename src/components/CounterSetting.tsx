import React from 'react';
import {DisplaySet} from './DisplaySet';
import s from'./styles/counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store";
import {settingAC} from "./countReducer";
import {InitialStateType} from "../App";

export const CounterSetting:React.FC = () => {

    const dispatch = useDispatch()
    const disabledSet = useSelector<AppRootStateType, boolean>(state=> state.counter.disabledSet)


    const onSetHandler = ()=> {
        dispatch(settingAC())
    }

    return (
        <div className={s.counter}>
            <DisplaySet/>
            <div className={s.buttonsBlock}>
                <button onClick={onSetHandler} disabled={disabledSet}>set</button>
            </div>
        </div>
    );
};

