import React, {ChangeEvent, useState} from 'react';

type InputPropsType = {
    callback: (newTitle: string) => void
    title: string
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
    error: boolean
}
const Input = (props: InputPropsType) => {
    const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
      props.onChangeInput(e)
    }
    const onKeyEnter = (e:React.KeyboardEvent<HTMLInputElement>) => {
      props.onKeyEnter(e)
    }

    return (
        <div>
            <input className={props.error ? 'error' : ''}
                   value={props.title}
                   onChange={onChangeInput}
                   onKeyPress={onKeyEnter}/>
            {props.error ? <div className={'error-message'}>Нету тайтла!</div> : ''}
        </div>
    );
};

export default Input;