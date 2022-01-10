import React, {useCallback} from 'react';
import {buttonRender} from "./ButtonRender";

type ButtonPropsType = {
    callback: () => void
    name: string
    className?: string
}
export const ButtonX = React.memo(({callback, name, ...props}: ButtonPropsType) => {
    const onClick = useCallback(() => callback(), [callback])
    return (
        <div>
            {buttonRender(name, props.className, onClick)}
        </div>
    )
})

export default ButtonX;
