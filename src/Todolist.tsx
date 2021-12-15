import React, {ChangeEvent, useState} from 'react';
import {TasksStateType} from "./App";
import AddForm from "./Components/AddForm";
import EditableSpan from "./Components/EditableSpan";

export type FilterType = 'all' | 'complited' | 'active'

export type TodolistType = {
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
    todolistID: string
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todolistID: string) => void
    changeFilter: (filter: FilterType, todolistID: string) => void
    addTask: (title: string, todolistID: string) => void
    filter: string
    removeTodolist: (todolistId: string) => void
    changeTaskTitle:(newTitle: string, todolistID: string,id:string) => void
}

export function Todolist(props: TodolistPropsType) {

    const removeTask = (id: string) => {
        props.removeTask(id, props.todolistID)
    }
    const changeFilter = (filter: FilterType) => props.changeFilter(filter, props.id)
    const removeTodolist = () => props.removeTodolist(props.todolistID)

    const addTask=(title:string)=>props.addTask(title,props.todolistID)

    const changeTaskTitle=(newTitle:string)=>props.changeTaskTitle(newTitle,props.todolistID,props.id)


    return <div>
        <h3>{props.title}
            <button onClick={removeTodolist}>x</button>
        </h3>

        <div>
           <AddForm callback={addTask}/>
        </div>
        <ul>
            {props.tasks.map(m => <li key={m.id}>
                    <input className={m.isDone ? 'is-done' : ''}
                           type="checkbox" checked={m.isDone}/>
                    <EditableSpan title={m.title} callback={changeTaskTitle}/>
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
