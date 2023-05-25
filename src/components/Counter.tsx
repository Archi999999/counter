import React from 'react';
import {Button} from "./Button";
import { Display } from './Display';
import s from './styles/counter.module.css'

type PropsType = {
    value: number
    disabledInc:boolean
    disabledRes:boolean
    increment:()=>void
    reset:()=>void
    error:string
}
export const Counter:React.FC<PropsType> = (
    {
        value,
        disabledRes,
        increment,
        reset,
        disabledInc,
        error
    }
) => {


    return (
        <div className={s.counter}>
            <Display value={value} error={error}/>
            <div className={s.buttonsBlock} >
                <Button onClick={increment} name={'inc'} disabled={disabledInc}/>
                <Button onClick={reset} name={'reset'} disabled={disabledRes}/>
            </div>
        </div>
    );
};

