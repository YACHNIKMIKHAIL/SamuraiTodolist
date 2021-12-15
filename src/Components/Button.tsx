import React from 'react';

type ButtonPropsType={
    callback:()=>void
    name:string
}
const Button = (props:ButtonPropsType) => {
    const onClick=()=>props.callback()
    return (
        <div>
            <button onClick={onClick}>{props.name}</button>
        </div>
    );
};

export default Button;