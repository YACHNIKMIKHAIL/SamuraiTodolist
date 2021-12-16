import React from 'react';
import {Button} from "@mui/material";
import styled from "styled-components";

type ButtonPropsType = {
    callback: () => void
    name: string
    className?: string
}
const ButtonX = ({callback, name, ...props}: ButtonPropsType) => {
    const onClick = () => callback()

    return (
        <>
            <ButtonCase className={props.className}
                         onClick={onClick}>{name}</ButtonCase>

            {/*<Button variant="outlined"*/}
            {/*        onClick={onClick}*/}
            {/*        style={{maxWidth: '120px', maxHeight: '30px', minWidth: '10px', minHeight: '10px',*/}
            {/*            color:"white", backgroundColor: "rgba(58,68,66,0.4)"}}*/}
            {/*>{name}</Button>*/}

        </>
    );
};

export default ButtonX;

const ButtonCase = styled("button")`
  padding: 5px;
  margin: 0 5px;
  background-color: rgba(236,225,202,0.2);
  border: 2px  rgba(83,94,88,0.9) solid;
  color: sandybrown;
  height: 80%;
  border-radius: 7px;
  display: flex;
  align-items: center;
  
`