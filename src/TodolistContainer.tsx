import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
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
    const changeFilter = useCallback((filter: FilterType, todolistID: string) => {
        dispatch(changeTodoFilterAC(filter, todolistID))
    }, [dispatch])
    const changeTodolistTitle = useCallback((newTitle: string) => {
        dispatch(changeTodoTitleAC(newTitle, todolistID))
    }, [dispatch, todolistID])
    const removeTodolist = useCallback(() => {
        dispatch(removeTodoAC(todolistID))
    }, [dispatch, todolistID])


    return <Todolist todolistID={todolistID}
                     filter={todolist.filter}
                     title={todolist.title}
                     removeTodolist={removeTodolist}
                     changeFilter={changeFilter}
                     changeTodolistTitle={changeTodolistTitle}
    />

}

export const TodolistContainer = React.memo(TodolistContainerMemo)
