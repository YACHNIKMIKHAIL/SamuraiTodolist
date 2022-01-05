import React, {ChangeEvent, useState} from 'react';

type EditableSpanType = {
    title: string
    callback: (newTitle: string) => void
}
export const EditableSpanMemo = (props: EditableSpanType) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')

    const activateEdit = () => {
        setEdit(true)
        setTitle(props.title)
    }
    const desActivateEdit = () => {
        setEdit(false)
        props.callback(title)
    }
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return (
        edit
            ? <input value={title} onChange={onChangeInput} onBlur={desActivateEdit} autoFocus/>
            : <span onDoubleClick={activateEdit}>{props.title}</span>
    );
};

export const EditableSpan = React.memo(EditableSpanMemo);
