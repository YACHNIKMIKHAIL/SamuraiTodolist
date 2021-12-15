import React from 'react';

type ButtonPropsType = {
    callback: () => void
    name: string
}
const Button = ({callback, name, ...props}: ButtonPropsType) => {
    const onClick = () => callback()

    return (
        <div>
            <button onClick={onClick}>{name}</button>
        </div>
    );
};

export default Button;