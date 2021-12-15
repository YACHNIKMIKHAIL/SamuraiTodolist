import React, {ChangeEvent, useState} from 'react';

type AddFormType={
    callback:(title:string)=>void
}
const AddForm = (props:AddFormType) => {
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
            <input className={error ? 'error' : ''}
                   value={title}
                   onChange={onChangeInput}
                   onKeyPress={onKeyEnter}/>
            <button onClick={addTask}>+</button>
            {error ? <div className={'error-message'}>Нету тайтла!</div> : ''}
        </div>
    );
};

export default AddForm;