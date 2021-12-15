import React, {ChangeEvent, useState} from 'react';

export type FilterType = 'all' | 'complited' | 'active'
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (filter: FilterType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {
    const [title, setTitle] = useState<string>('')

    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' ? addTask() : ''
    const removeTask = (id: string) => {
        props.removeTask(id)
    }
    const changeFilter = (filter: FilterType) => props.changeFilter(filter)


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeInput}
                   onKeyPress={onKeyEnter}/>
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {props.tasks.map(m => <li key={m.id}>
                    <input type="checkbox" checked={m.isDone}/>
                    <span>{m.title}</span>
                    <button onClick={() => removeTask(m.id)}>x</button>
                </li>
            )}


        </ul>
        <div>
            <button onClick={() => changeFilter('all')}>All</button>
            <button onClick={() => changeFilter('active')}>Active</button>
            <button onClick={() => changeFilter('complited')}>Completed</button>
        </div>
    </div>
}
