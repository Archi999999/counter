import React from 'react';
import s from './styles/display.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store";

export const Display:React.FC = () => {
    const {error, currentValue} = useSelector<AppRootStateType, {error: string, currentValue:number}>(state=>{
        return {error: state.counter.error, currentValue: state.counter.currentValue}
    })

    const withoutValueSpanCondition = (error !== 'incorrect value' && error !== "enter values and press 'set'")
    let classNameError = `${s.defaultError}
    ${error === 'max value' && s.error}
    ${error === 'incorrect value' && s.incorrect}
    ${error === "enter values and press 'set'" && s.enterValue}`
    let valueStyle = `${s.value}
    ${(error === 'max value') && s.valIncorrect}
    `
    return (
        <div className={s.display}>
            {withoutValueSpanCondition && <span className={valueStyle}>{currentValue}</span>}
            {error && <span className={classNameError}>{error}</span>}
        </div>
    );
};

