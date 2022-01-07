import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./Components/State/TasksReducer";
import {changeTodoFilterAC, changeTodoTitleAC, removeTodoAC} from "./Components/State/TodolistsReducer";
import {EditableSpan} from "./Components/EditableSpan";
import Button from "./Components/Button";
import {AddForm} from "./Components/AddForm";
import {TasksMap} from "./Components/TasksMap";
import ButtonX from "./Components/Button";
import {FilterType, TaskType, Todolist} from "./Todolist";

type TodolistContainerPropsType = {
    todolistID: string
    title: string
    tasks: Array<TaskType>
    filter: string
}

export const TodolistContainerMemo = ({
                                          todolistID,
                                          title,
                                          tasks,
                                          filter
                                      }: TodolistContainerPropsType) => {
    console.log(`${todolistID}`)
    console.log(tasks)
    const dispatch = useDispatch()
    const removeTask = useCallback((id: string, todolistID: string) => {
        dispatch(removeTaskAC(id, todolistID))
    }, [dispatch, todolistID])
    const changeFilter = useCallback((filter: FilterType, todolistID: string) => {
        dispatch(changeTodoFilterAC(filter, todolistID))
    }, [dispatch, filter, todolistID])
    const addTask = useCallback((title: string) => {
        dispatch(addTaskAC(title, todolistID))
    }, [dispatch, title, todolistID])
    const changeTaskTitle = useCallback((newTitle: string, todolistID: string, id: string) => {
        dispatch(changeTaskTitleAC(newTitle, todolistID, id))
    }, [dispatch, todolistID])
    const changeTodolistTitle = useCallback((newTitle: string) => {
        dispatch(changeTodoTitleAC(newTitle, todolistID))
    }, [dispatch, todolistID])
    const removeTodolist = useCallback(() => {
        dispatch(removeTodoAC(todolistID))
    }, [dispatch, todolistID])
    const changeCheckbox = useCallback((isDone: boolean, id: string) => {
        dispatch(changeTaskStatusAC(isDone, id, todolistID))
    }, [dispatch, todolistID])

    return <Todolist todolistID={todolistID} filter={filter} title={title} tasks={tasks} removeTodolist={removeTodolist} addTask={addTask} removeTask={removeTask}
                     changeFilter={changeFilter} changeTaskTitle={changeTaskTitle} changeTodolistTitle={changeTodolistTitle} changeCheckbox={changeCheckbox}/>

}

export const TodolistContainer = React.memo(TodolistContainerMemo)
