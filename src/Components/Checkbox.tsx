import React, {ChangeEvent} from 'react';
import CheckboxX from '@mui/material/Checkbox';

type CheckboxPropsType={
    isDone:boolean
    callback:(e: ChangeEvent<HTMLInputElement>)=>void
}
const Checkbox = (props:CheckboxPropsType) => {
    const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
      props.callback(e)
    }

    return (
        <CheckboxX value={props.isDone} onChange={(e)=>onChangeCheckbox(e)}/>
    );
};

export default Checkbox;
