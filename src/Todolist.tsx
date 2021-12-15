import React, {ChangeEvent, useState} from 'react';
import {TasksStateType} from "./App";

export type FilterType = 'all' | 'complited' | 'active'

export type TodolistType={
    id: string
    title: string
    filter: FilterType
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistPropsType = {
    todolistID:string
    id:string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string,todolistID:string) => void
    changeFilter: (filter: FilterType,todolistID: string) => void
    addTask: (title: string,todolistID:string) => void
    filter: string
}

export function Todolist(props: TodolistPropsType) {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim(),props.todolistID)
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
    const removeTask = (id: string) => {
        props.removeTask(id,props.todolistID)
    }
    const changeFilter = (filter: FilterType) => props.changeFilter(filter,props.id)


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input className={error ? 'error' : ''}
                   value={title}
                   onChange={onChangeInput}
                   onKeyPress={onKeyEnter}/>
            <button onClick={addTask}>+</button>
            {error ? <div className={'error-message'}>Нету тайтла!</div> : ''}
        </div>
        <ul>
            {props.tasks.map(m => <li key={m.id}>
                    <input className={m.isDone ? 'is-done' : ''}
                           type="checkbox" checked={m.isDone}/>
                    <span>{m.title}</span>
                    <button onClick={() => removeTask(m.id)}>x</button>
                </li>
            )}


        </ul>
        <div>
            <button className={props.filter === 'all' ? 'active-filter' : ''}
                    onClick={() => changeFilter('all')}>All
            </button>
            <button className={props.filter === 'active' ? 'active-filter' : ''}
                    onClick={() => changeFilter('active')}>Active
            </button>
            <button className={props.filter === 'complited' ? 'active-filter' : ''}
                    onClick={() => changeFilter('complited')}>Completed
            </button>
        </div>
    </div>
}
