import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./Components/State/TasksReducer";
import {changeTodoFilterAC, changeTodoTitleAC, removeTodoAC} from "./Components/State/TodolistsReducer";
import {FilterType, Todolist, TodolistType} from "./Todolist";
import {rootReducerType} from "./Components/State/store";

type TodolistContainerPropsType = {
    todolistID: string
}

export const TodolistContainerMemo = ({
                                          todolistID
                                      }: TodolistContainerPropsType) => {
    console.log(`${todolistID}`)
    const todolist = useSelector<rootReducerType, TodolistType>(state => state.todolists.filter(d => d.id === todolistID)[0])
    const dispatch = useDispatch()
    const removeTask = useCallback((id: string, todolistID: string) => {
        dispatch(removeTaskAC(id, todolistID))
    }, [dispatch])
    const changeFilter = useCallback((filter: FilterType, todolistID: string) => {
        dispatch(changeTodoFilterAC(filter, todolistID))
    }, [dispatch])
    const addTask = useCallback((title: string) => {
        dispatch(addTaskAC(title, todolistID))
    }, [dispatch, todolistID])
    const changeTaskTitle = useCallback((newTitle: string, todolistID: string, id: string) => {
        dispatch(changeTaskTitleAC(newTitle, todolistID, id))
    }, [dispatch])
    const changeTodolistTitle = useCallback((newTitle: string) => {
        dispatch(changeTodoTitleAC(newTitle, todolistID))
    }, [dispatch, todolistID])
    const removeTodolist = useCallback(() => {
        dispatch(removeTodoAC(todolistID))
    }, [dispatch, todolistID])
    const changeCheckbox = useCallback((isDone: boolean, id: string) => {
        dispatch(changeTaskStatusAC(isDone, id, todolistID))
    }, [dispatch, todolistID])

    return <Todolist todolistID={todolistID}
                     filter={todolist.filter}
                     title={todolist.title}
                     removeTodolist={removeTodolist}
                     addTask={addTask}
                     removeTask={removeTask}
                     changeFilter={changeFilter}
                     changeTaskTitle={changeTaskTitle}
                     changeTodolistTitle={changeTodolistTitle}
                     changeCheckbox={changeCheckbox}/>

}

export const TodolistContainer = React.memo(TodolistContainerMemo)
