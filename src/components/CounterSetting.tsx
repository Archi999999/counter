import React, {ChangeEvent} from 'react';
import {Button} from "./Button";
import {DisplaySet} from './DisplaySet';
import s from'./styles/counter.module.css'

type PropsType = {
    maxValue: number
    startValue: number
    disabledSet:boolean

    setting:()=> void
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>)=>void
    changeStartValue: (e: ChangeEvent<HTMLInputElement>)=>void
}

export const CounterSetting:React.FC<PropsType> = (
    {
        maxValue,
        startValue,
        disabledSet,
        setting,
        changeMaxValue,
        changeStartValue,
    }
) => {
    return (
        <div className={s.counter}>
            <DisplaySet maxValue={maxValue} startValue={startValue} changeMaxValue={changeMaxValue} changeStartValue={changeStartValue}/>
            <div className={s.buttonsBlock}>
                <Button onClick={setting} name={'set'} disabled={disabledSet}/>
            </div>
        </div>
    );
};

