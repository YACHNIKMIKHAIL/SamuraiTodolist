import React, {ChangeEvent, useState} from 'react';
import {TasksStateType} from "./App";
import AddForm from "./Components/AddForm";
import EditableSpan from "./Components/EditableSpan";
import TasksMap from "./Components/TasksMap";

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
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todolistID: string) => void
    changeFilter: (filter: FilterType, todolistID: string) => void
    addTask: (title: string, todolistID: string) => void
    filter: string
    removeTodolist: (todolistId: string) => void
    changeTaskTitle: (newTitle: string, todolistID: string, id: string) => void
    changeTodolistTitle: (newTitle: string, todolistID: string) => void
}

export function Todolist(props: TodolistPropsType) {


    const changeFilter = (filter: FilterType) => props.changeFilter(filter, props.todolistID)
    const removeTodolist = () => props.removeTodolist(props.todolistID)

    const addTask = (title: string) => props.addTask(title, props.todolistID)


    const changeTodolistTitle = (newTitle: string) => props.changeTodolistTitle(newTitle, props.todolistID)

    return <div>
        <h3><EditableSpan title={props.title} callback={changeTodolistTitle}/>
            <button onClick={removeTodolist}>x</button>
        </h3>

        <div>
            <AddForm callback={addTask} title={props.title}/>
        </div>
        <ul>
            <TasksMap tasks={props.tasks}
                      removeTask={props.removeTask}
                      changeTaskTitle={props.changeTaskTitle}
                      todolistID={props.todolistID}/>
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
