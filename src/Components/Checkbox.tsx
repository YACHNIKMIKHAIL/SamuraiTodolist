import React, {ChangeEvent} from 'react';

type CheckboxPropsType={
    isDone:boolean
    callback:(e: ChangeEvent<HTMLInputElement>)=>void
}
const Checkbox = (props:CheckboxPropsType) => {
    const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
      props.callback(e)
    }
    return (
        <input type="checkbox" checked={props.isDone}
        onChange={(e)=>onChangeCheckbox(e)}/>
    );
};

export default Checkbox;