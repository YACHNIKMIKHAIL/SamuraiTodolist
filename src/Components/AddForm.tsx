import React, {ChangeEvent, useState} from 'react';
import Input from "./Input";
import Button from "./Button";

type AddFormType = {
    callback: (title: string) => void
    title: string
}
const AddForm = (props: AddFormType) => {

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const addTask = () => {
        if (title.trim() !== '') {
            props.callback(title.trim())
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
    const onKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask()
        }
    }

    return (
        <div>
            <Input callback={addTask}
                   title={title}
                   onChangeInput={onChangeInput}
                   onKeyEnter={onKeyEnter}
                   error={error}/>
            <Button callback={addTask} name={'+'}/>
        </div>
    );
};

export default AddForm;