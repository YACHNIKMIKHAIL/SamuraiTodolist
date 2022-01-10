import React, {ChangeEvent, useCallback} from 'react';
import styled from "styled-components";

type InputPropsType = {
    callback: (newTitle: string) => void
    title: string
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
    error: boolean
}
export const InputMemo = ({title, onChangeInput, onKeyEnter, error}: InputPropsType) => {
    const onChangeInputX = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChangeInput(e)
    },[onChangeInput])
    const onKeyEnterX =useCallback ((e: React.KeyboardEvent<HTMLInputElement>) => {
        onKeyEnter(e)
    },[onKeyEnter])

    return (
        <>
            <InputCase className={error ? 'error' : ''}
                       value={error ? 'введи тайтл!!!' : title}
                       onChange={onChangeInputX}
                       onKeyPress={onKeyEnterX}/>
        </>
    );
};

export const Input = React.memo(InputMemo);

const InputCase = styled("input")`
  background-color: rgba(231, 221, 201, 0.6);
  border: 1px solid rgba(99, 110, 101, 0.8);
  border-radius: 5px;
  width: 90%;
  height: 70%;
  font-size: 20px;
`