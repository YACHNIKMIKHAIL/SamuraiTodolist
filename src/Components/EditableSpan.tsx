import React, {ChangeEvent, useCallback, useState} from 'react';

type EditableSpanType = {
    title: string
    callback: (newTitle: string) => void
}
export const EditableSpanMemo = (props: EditableSpanType) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')
    console.log('span')
    const activateEdit = useCallback(() => {
        setEdit(true)
        setTitle(props.title)
    }, [props.title])
    const desActivateEdit = useCallback(() => {
        setEdit(false)
        props.callback(title)
    }, [ title,props])
    const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value), [])

    return (
        edit
            ? <input value={title} onChange={onChangeInput} onBlur={desActivateEdit} autoFocus/>
            : <span onDoubleClick={activateEdit}>{props.title}</span>
    );
};

export const EditableSpan = React.memo(EditableSpanMemo);
