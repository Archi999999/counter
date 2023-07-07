import React, {ChangeEvent} from 'react';
import s from './styles/dispSet.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store";
import {InitialStateType} from "../App";
import {changeMaxValueAC, changeStartValueAC} from "./countReducer";

export const DisplaySet:React.FC = () => {
    const dispatch = useDispatch()
    const {maxValue, startValue} = useSelector<AppRootStateType, InitialStateType>(state=>state.counter)
    // const className =  `${s.input}
    // ${state.error && s.errorInput}`

    const onMaxValueHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        dispatch(changeMaxValueAC(+e.currentTarget.value))
    }
    const onStartValueHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        dispatch(changeStartValueAC(+e.currentTarget.value))
    }

    return (
        <div className={s.dispSet}>
            <span style={{fontSize:'10px'}}>max value:</span>
            <input value={maxValue} type={'number'} onChange={onMaxValueHandler} />
            <span style={{fontSize:'10px'}}>start value:</span>
            <input value={startValue} type={'number'} onChange={onStartValueHandler} />
        </div>
    );
};
