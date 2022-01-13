import React, {ChangeEvent, useCallback} from 'react';
import CheckboxX from '@mui/material/Checkbox';

type CheckboxPropsType = {
    isDone: boolean
    callback: (e: ChangeEvent<HTMLInputElement>) => void
}
export const CheckboxMemo = (props: CheckboxPropsType) => {
    console.log('checkbox')
    const onChangeCheckbox = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        props.callback(e)
    }, [props])

    return (
        <CheckboxX value={props.isDone} onChange={(e) => onChangeCheckbox(e)}/>
    );
};

export const Checkbox = React.memo(CheckboxMemo);
