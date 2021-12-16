import React from 'react';

type ButtonPropsType = {
    callback: () => void
    name: string
    className?:string
}
const Button = ({callback, name, ...props}: ButtonPropsType) => {
    const onClick = () => callback()

    return (
        <div>
            <button className={props.className}
                onClick={onClick}>{name}</button>
        </div>
    );
};

export default Button;