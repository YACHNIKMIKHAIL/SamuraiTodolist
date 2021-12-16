import React, {ChangeEvent} from 'react';
import styled from "styled-components";

type InputPropsType = {
    callback: (newTitle: string) => void
    title: string
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
    error: boolean
}
const Input = ({callback, title, onChangeInput, onKeyEnter, error, ...props}: InputPropsType) => {
    const onChangeInputX = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeInput(e)
    }
    const onKeyEnterX = (e: React.KeyboardEvent<HTMLInputElement>) => {
        onKeyEnter(e)
    }

    return (
        <>
            <InputCase className={error ? 'error' : ''}
                   value={title}
                   onChange={onChangeInputX}
                   onKeyPress={onKeyEnterX}/>
            {error ? <div className={'error-message'}>Нету тайтла!</div> : ''}
        </>
    );
};

export default Input;

const InputCase=styled("input")`
  background-color: rgba(231, 221, 201, 0.6);
  border: 1px solid rgba(99, 110, 101, 0.8);
  border-radius: 5px;
  width: 90%;
  height: 70%;
  font-size: 20px;
`