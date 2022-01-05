import React from 'react';
import styled from "styled-components";
import {buttonRender} from "./ButtonRender";

type ButtonPropsType = {
    callback: () => void
    name: string
    className?: string
}
export const ButtonX = ({callback, name, ...props}: ButtonPropsType) => {
    const onClick = () => callback()
    return (
        <div>
            {buttonRender(name, props.className, onClick)}
        </div>
    )
}

export default ButtonX;

const ButtonCase = styled("button")`
  padding: 5px;
  margin: 0 5px;
  background-color: rgba(236, 225, 202, 0.2);
  border: 2px rgba(83, 94, 88, 0.9) solid;
  color: sandybrown;
  height: 80%;
  border-radius: 7px;
  display: flex;
  align-items: center;
`