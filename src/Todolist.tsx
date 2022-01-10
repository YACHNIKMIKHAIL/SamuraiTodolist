import React from 'react';
import styled from "styled-components";
import Button from "./Components/Button";
import ButtonX from "./Components/Button";
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
    filter: FilterType
    removeTask: (id: string, todolistID: string) => void
    changeFilter: (filter: FilterType, todolistID: string) => void
    addTask: (title: string) => void
    changeTaskTitle: (newTitle: string, todolistID: string, id: string) => void
    changeTodolistTitle: (newTitle: string) => void
    removeTodolist: () => void
    changeCheckbox: (isDone: boolean, id: string) => void
}

export const TodolistMemo = ({
                                 todolistID,
                                 title,
                                 filter, ...props
                             }: TodolistPropsType) => {
    return <TodolistCase>

        <TitleCase>
            <EditableSpan title={title} callback={props.changeTodolistTitle}/>
            <Button callback={props.removeTodolist} name={'x'}/>
        </TitleCase>

        <AddFormCase>
            <AddForm callback={props.addTask} title={title}/>
        </AddFormCase>

        <TasksMapCase>
            <TasksMap removeTask={props.removeTask}
                      changeTaskTitle={props.changeTaskTitle}
                      todolistID={todolistID}
                      changeCheckbox={props.changeCheckbox}
                      filter={filter}/>
        </TasksMapCase>

        <ButtonCase>
            <ButtonX callback={() => props.changeFilter('all', todolistID)} name={'All'}
                     className={filter === 'all' ? 'active-filter' : ''}/>
            <ButtonX callback={() => props.changeFilter('active', todolistID)} name={'Active'}
                     className={filter === 'active' ? 'active-filter' : ''}/>
            <ButtonX callback={() => props.changeFilter('complited', todolistID)} name={'Complited'}
                     className={filter === 'complited' ? 'active-filter' : ''}/>
        </ButtonCase>
    </TodolistCase>
}

export const Todolist = React.memo(TodolistMemo)

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