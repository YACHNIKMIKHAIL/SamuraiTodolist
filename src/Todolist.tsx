import React from 'react';
import AddForm from "./Components/AddForm";
import EditableSpan from "./Components/EditableSpan";
import TasksMap from "./Components/TasksMap";
import styled from "styled-components";
import Button from "./Components/Button";
import ButtonX from "./Components/Button";

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
    changeCheckbox: (isDone: boolean, id: string, todolistID: string) => void
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

    return <TodolistCase>

        <TitleCase>
            <EditableSpan title={title} callback={changeTodolistTitleX}/>
            <Button callback={removeTodolistX} name={'x'}/>
        </TitleCase>

        <AddFormCase>
            <AddForm callback={addTaskX} title={title}/>
        </AddFormCase>

        <TasksMapCase>
            <TasksMap tasks={tasks}
                      removeTask={removeTask}
                      changeTaskTitle={changeTaskTitle}
                      todolistID={todolistID}
                      changeCheckbox={props.changeCheckbox}/>
        </TasksMapCase>

        <ButtonCase>
            <ButtonX callback={() => changeFilterX('all')} name={'All'}
                    className={filter === 'all' ? 'active-filter' : ''}/>
            <ButtonX callback={() => changeFilterX('active')} name={'Active'}
                    className={filter === 'active' ? 'active-filter' : ''}/>
            <ButtonX callback={() => changeFilterX('complited')} name={'Complited'}
                    className={filter === 'complited' ? 'active-filter' : ''}/>
        </ButtonCase>
    </TodolistCase>
}

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
  color: whitesmoke;
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
  height: 30px;
`