import React from 'react';
import {Button, rgbToHex} from "@mui/material";
import styled from "styled-components";

type ButtonPropsType = {
    callback: () => void
    name: string
    className?:string
}
const ButtonX = ({callback, name, ...props}: ButtonPropsType) => {
    const onClick = () => callback()

    return (
        <ButtonCase>
            <button className={props.className}
                onClick={onClick}>{name}</button>
            {/*<Button variant="outlined"*/}
            {/*        onClick={onClick}*/}
            {/*        style={{maxWidth: '120px', maxHeight: '30px', minWidth: '10px', minHeight: '10px',*/}
            {/*            color:"white", backgroundColor: "rgba(58,68,66,0.4)"}}*/}
            {/*>{name}</Button>*/}
        </ButtonCase>
    );
};

export default ButtonX;

const ButtonCase=styled.div`
    margin: 3px 10px;
    `