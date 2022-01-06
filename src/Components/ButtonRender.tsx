import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {Button} from "@mui/material";
import React from "react";
import SmartToyIcon from '@mui/icons-material/SmartToy';

export const buttonRender = (name:string,className:string|undefined,onClick:()=>void) => {
    if (name === '+') {
        return <IconButton aria-label="fingerprint" color="secondary" onClick={onClick} size={'large'}>
            <SmartToyIcon style={{color:"#19201F"}} />
        </IconButton>
    }
    if (name === 'x') {
        return <IconButton aria-label="delete" size="small" onClick={onClick}>
            <DeleteIcon fontSize="small"/>
        </IconButton>
    }
    if (name === 'All') {
        if(className){
            return <Button variant="contained" onClick={onClick}
                           style={{backgroundColor:"#A4644F"}}
            >{name}</Button>
        }
        return <Button variant="outlined" size="small" onClick={onClick}
                       style={{color:"#121819", border:"none"}}
        >
            {name}
        </Button>
    }
    if (name === 'Active') {
        if(className){
            return <Button variant="contained" onClick={onClick}
                           style={{backgroundColor:"#A4644F"}}
            >{name}</Button>
        }
        return <Button variant="outlined" size="small" onClick={onClick}
                       style={{color:"#121819", border:"none"}}
        >
            {name}
        </Button>
    }
    if (name === 'Complited') {
        if(className){
            return <Button variant="contained" onClick={onClick}
                           style={{backgroundColor:"#A4644F"}}
            >{name}</Button>
        }
        return <Button variant="outlined" size="small" onClick={onClick}
                       style={{color:"#121819", border:"none"}}
        >
            {name}
        </Button>
    }
}
