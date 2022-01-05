import React, {ChangeEvent, useState} from 'react';
import ButtonX from "./Button";
import styled from "styled-components";
import {Input} from "./Input";

type AddFormType = {
    callback: (title: string) => void
    title: string
}
export const AddFormMemo = ({callback, ...props}: AddFormType) => {

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const addTask = () => {
        if (title.trim() !== '') {
            callback(title.trim())
            setTitle('')
            setError(false)
        } else {
            setError(true)
        }
    }
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const onKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' ? addTask() : ''

    return (
        <FormCase>
            <Input callback={addTask}
                   title={title}
                   onChangeInput={onChangeInput}
                   onKeyEnter={onKeyEnter}
                   error={error}/>
            <ButtonX callback={addTask} name={'+'}/>
        </FormCase>
    );
};

export const AddForm = React.memo(AddFormMemo);

const FormCase = styled.div`
  width: 70%;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
`