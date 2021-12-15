import React from 'react';
import AddForm from "./Components/AddForm";
import EditableSpan from "./Components/EditableSpan";
import TasksMap from "./Components/TasksMap";
import styled from "styled-components";

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

export function Todolist({
                             todolistID,
                             title,
                             tasks,
                             removeTask,
                             changeFilter,
                             addTask,
                             filter,
                             removeTodolist,
                             changeTaskTitle,
                             changeTodolistTitle,
                             ...props
                         }: TodolistPropsType) {

    const changeFilterX = (filter: FilterType) => changeFilter(filter, todolistID)
    const removeTodolistX = () => removeTodolist(todolistID)
    const addTaskX = (title: string) => addTask(title, todolistID)
    const changeTodolistTitleX = (newTitle: string) => changeTodolistTitle(newTitle, todolistID)

    return <div>
        <TodolistCase>
            <h3><EditableSpan title={title} callback={changeTodolistTitleX}/>
                <button onClick={removeTodolistX}>x</button>
            </h3>

            <div>
                <AddForm callback={addTaskX} title={title}/>
            </div>
            <ul>
                <TasksMap tasks={tasks}
                          removeTask={removeTask}
                          changeTaskTitle={changeTaskTitle}
                          todolistID={todolistID}/>
            </ul>
            <div>
                <button className={filter === 'all' ? 'active-filter' : ''}
                        onClick={() => changeFilterX('all')}>All
                </button>
                <button className={filter === 'active' ? 'active-filter' : ''}
                        onClick={() => changeFilterX('active')}>Active
                </button>
                <button className={filter === 'complited' ? 'active-filter' : ''}
                        onClick={() => changeFilterX('complited')}>Completed
                </button>
            </div>
        </TodolistCase>
    </div>
}

const TodolistCase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 3px solid black;
  background-size: contain;
  background-color: wheat;
  width: fit-content;
  padding: 20px;
`