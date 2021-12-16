import React from 'react';
import styled from "styled-components";
import {Fingerprint} from "@mui/icons-material";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button} from "@mui/material";

type ButtonPropsType = {
    callback: () => void
    name: string
    className?: string
}
const ButtonX = ({callback, name, ...props}: ButtonPropsType) => {
    const onClick = () => callback()

    let render = () => {
        if (name === '+') {
            return <IconButton aria-label="fingerprint" color="secondary" onClick={onClick}>
                <Fingerprint/>
            </IconButton>
        }
        if (name === 'x') {
            return <IconButton aria-label="delete" size="small" onClick={onClick}>
                <DeleteIcon fontSize="small"/>
            </IconButton>
        }
        if (name === 'All') {
            return <Button variant="outlined" size="small" onClick={onClick}>
                {name}
            </Button>
        }
        if (name === 'Active') {
            return <Button variant="outlined" size="small" onClick={onClick}>
                {name}
            </Button>
        }
        if (name === 'Complited') {
            return <Button variant="outlined" size="small" onClick={onClick}>
                {name}
            </Button>
        }
    }
    return (
        <div>
            {render()}
        </div>
    )


    // return (
    //     <>
    //         <ButtonCase className={props.className}
    //                     onClick={onClick}>{name}</ButtonCase>
    //
    //         <Button variant="outlined"
    //                 onClick={onClick}
    //                 style={{
    //                     maxWidth: '120px', maxHeight: '30px', minWidth: '10px', minHeight: '10px',
    //                     color: "white", backgroundColor: "rgba(58,68,66,0.4)"
    //                 }}>{name}</Button>
    //
    //     </>
    // );


    // {(name === '+') ? <IconButton aria-label="fingerprint" color="secondary" onClick={onClick}>
    //         <Fingerprint/>
    //     </IconButton>
    //     :
    //     (name === 'x') ? <IconButton aria-label="delete" size="small" onClick={onClick}>
    //             <DeleteIcon fontSize="small"/>
    //         </IconButton>
    //         :
    //         (name === 'all') ? <Button variant="outlined" size="small">
    //                 {name}
    //             </Button>
    //             :
    //             (name === 'active') ? <Button variant="outlined" size="small">
    //                     {name}
    //                 </Button>
    //                 :
    //                 (name === 'complited') ? <Button variant="outlined" size="small">
    //                         {name}
    //                     </Button>
    //                     : ''}

};

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