import React, {ChangeEvent} from 'react';

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
        <div>
            <input className={error ? 'error' : ''}
                   value={title}
                   onChange={onChangeInputX}
                   onKeyPress={onKeyEnterX}/>
            {error ? <div className={'error-message'}>Нету тайтла!</div> : ''}
        </div>
    );
};

export default Input;