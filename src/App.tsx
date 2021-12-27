import React from 'react';
import './App.css';
import {FilterType, TaskType} from './Todolist';
import styled from "styled-components";
import {v1} from "uuid";
import AddForm from "./Components/AddForm";
import TodolistsMap from "./Components/TodolistsMap";
import {
    addNewTasksAC,
    addTaskAC,
    changeTaskStatusAC,
    changeTaskTitleAC, deleteTasksAC,
    removeTaskAC
} from "./Components/State/TasksReducer";
import {
    addTodoAC,
    changeTodoFilterAC,
    changeTodoTitleAC,
    removeTodoAC
} from "./Components/State/TodolistsReducer";
import {useDispatch} from "react-redux";


export type TasksStateType = { [key: string]: Array<TaskType> }

function App() {

    const dispatch = useDispatch()

    const removeTask = (id: string, todolistID: string) => dispatch(removeTaskAC(id, todolistID))

    const changeFilter = (filter: FilterType, todolistID: string) => dispatch(changeTodoFilterAC(filter, todolistID))

    const addTask = (title: string, todolistID: string) => dispatch(addTaskAC(title, todolistID))

    const removeTodolist = (todolistID: string) => {
        dispatch(deleteTasksAC(todolistID))
        dispatch(removeTodoAC(todolistID))
    }

    const addTodolist = (title: string) => {
        const newId = v1()
        dispatch(addTodoAC(newId, title))
        dispatch(addNewTasksAC(newId))
    }

    const changeTaskTitle = (newTitle: string, todolistID: string, id: string) => dispatch(changeTaskTitleAC(newTitle, todolistID, id))


    const changeTodolistTitle = (newTitle: string, todolistID: string) => dispatch(changeTodoTitleAC(newTitle, todolistID))


    const changeCheckbox = (isDone: boolean, id: string, todolistID: string) => dispatch(changeTaskStatusAC(isDone, id, todolistID))

    return (
        <div className={'background'}>
            <AppCase>
                <BobyCase>
                    <TodolistsMap
                        changeTodolistTitle={changeTodolistTitle}
                        changeTaskTitle={changeTaskTitle}
                        addTask={addTask}
                        changeFilter={changeFilter}
                        removeTask={removeTask}
                        removeTodolist={removeTodolist}
                        changeCheckbox={changeCheckbox}
                    />
                </BobyCase>
                <FormCase>What to do:
                    <AddForm callback={addTodolist} title={'+'}/>
                </FormCase>
            </AppCase>
        </div>
    );
}

export default App;

const AppCase = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const BobyCase = styled.div`
  margin: 0 10px;
  display: inline-flex;
  flex-direction: row-reverse;
  overflow: auto;
  flex-wrap: wrap;
  height: 95vh;
  justify-content: space-around;
  align-items: flex-end;
`
const FormCase = styled.div`
  height: 10vh;
  margin: 10px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(231, 221, 201, 0.3);
  font-size: 40px;
  color: #2d2206;
  font-weight: bold;
`