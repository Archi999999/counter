import React, {ChangeEvent} from 'react';
import {Input} from "./Input";
import s from './styles/dispSet.module.css'

type PropsType = {
    maxValue: number
    startValue: number
    changeMaxValue: (e: ChangeEvent<HTMLInputElement>)=>void
    changeStartValue: (e: ChangeEvent<HTMLInputElement>)=>void
}

export const DisplaySet:React.FC<PropsType> = (
    {
        maxValue,
        startValue,
        changeMaxValue,
        changeStartValue,
    }
) => {


    return (
        <div className={s.dispSet}>
            <span style={{fontSize:'10px'}}>max value:</span>
            <Input callBack={changeMaxValue} value={maxValue} type={'number'} />
            <span style={{fontSize:'10px'}}>start value:</span>
            <Input callBack={changeStartValue} value={startValue} type={'number'} />
        </div>
    );
};
