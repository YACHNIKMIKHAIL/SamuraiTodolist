import React, {useCallback} from 'react';
import styled from "styled-components";
import Button from "./Components/Button";
import ButtonX from "./Components/Button";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./Components/State/TasksReducer";
import {changeTodoFilterAC, changeTodoTitleAC, removeTodoAC} from "./Components/State/TodolistsReducer";
import {useDispatch} from "react-redux";
import {AddForm} from "./Components/AddForm";
import {EditableSpan} from "./Components/EditableSpan";
import {TasksMap} from "./Components/TasksMap";

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
    filter: string
}

export const Todolist = ({
                                 todolistID,
                                 title,
                                 tasks,
                                 filter
                             }: TodolistPropsType) => {
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

    return <TodolistCase>

        <TitleCase>
            <EditableSpan title={title} callback={changeTodolistTitle}/>
            <Button callback={removeTodolist} name={'x'}/>
        </TitleCase>

        <AddFormCase>
            <AddForm callback={addTask} title={title}/>
        </AddFormCase>

        <TasksMapCase>
            <TasksMap tasks={tasks}
                      removeTask={removeTask}
                      changeTaskTitle={changeTaskTitle}
                      todolistID={todolistID}
                      changeCheckbox={changeCheckbox}/>
        </TasksMapCase>

        <ButtonCase>
            <ButtonX callback={() => changeFilter('all', todolistID)} name={'All'}
                     className={filter === 'all' ? 'active-filter' : ''}/>
            <ButtonX callback={() => changeFilter('active', todolistID)} name={'Active'}
                     className={filter === 'active' ? 'active-filter' : ''}/>
            <ButtonX callback={() => changeFilter('complited', todolistID)} name={'Complited'}
                     className={filter === 'complited' ? 'active-filter' : ''}/>
        </ButtonCase>
    </TodolistCase>
}

// export const Todolist = React.memo(TodolistMemo)

const TodolistCase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid rgba(99, 110, 101, 0.6);
  //background-color: wheat;
  width: 330px;
  border-radius: 30px;
  background-color: rgba(231, 221, 201, 0.4);
  margin: 5px;
  height: fit-content;
`
const TitleCase = styled.h3`
  width: 90%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #DFD5BE;
  margin: 5px;
`
const AddFormCase = styled.h3`
  width: 330px;
  display: flex;
  justify-content: center;
`
const TasksMapCase = styled.h3`
  max-height: 300px;
  width: 90%;
  flex-wrap: nowrap;
  overflow: auto;
  font-size: 20px;
`
const ButtonCase = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 20%;
  margin: 5px;
`