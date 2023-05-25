import React, {ChangeEvent} from 'react';
import s from './styles/dispSet.module.css'

type PropsType = {
    callBack: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    type: 'number' | 'text' | 'textArea'
    error?: 0| 1| 2
}

export const Input: React.FC<PropsType> = (
    {
        value,
        type,
        error,
        callBack,
    }) => {
    const className =  `${s.input}
    ${error && s.errorInput}`

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(e)
    }

    return (
        <input value={value} type={type} onChange={onChangeHandler} className={className}/>
    );
};
