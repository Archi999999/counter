import React from 'react';
import s from './styles/display.module.css'

type PropsType = {
    value?: number
    error?: string
}
export const Display:React.FC<PropsType> = (
    {
        value,
        error,
    }
) => {

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
            {withoutValueSpanCondition && <span className={valueStyle}>{value}</span>}
            {error && <span className={classNameError}>{error}</span>}
        </div>
    );
};

