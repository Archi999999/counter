import React from 'react';

type PropsType = {
    onClick: ()=>void
    name: string
    disabled?: boolean
}

export const Button:React.FC<PropsType> = (
    {
        onClick,
        name,
        disabled
    }) => {

    return (
        <button onClick={onClick} disabled={disabled}>{name}</button>
    );
};

