import React, {ChangeEvent, useState} from 'react';
import Input from "./Input";
import ButtonX from "./Button";
import styled from "styled-components";
import img from "./Images/wallpaperflare.com_wallpaper (9).jpg";

type AddFormType = {
    callback: (title: string) => void
    title: string
}
const AddForm = ({callback, ...props}: AddFormType) => {

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

export default AddForm;

const FormCase = styled.div`
  width: 70%;
  height:65% ;
  display: flex;
  justify-content: center;
  align-items: center;
`