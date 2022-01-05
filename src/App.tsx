import React from 'react';
import './App.css';
import {FilterType, TaskType} from './Todolist';
import {v1} from "uuid";
import AddForm from "./Components/AddForm";
import TodolistsMap from "./Components/TodolistsMap";
import {
    addNewTasksAC,
    addTaskAC,
    changeTaskStatusAC,
    changeTaskTitleAC,
    deleteTasksAC,
    removeTaskAC
} from "./Components/State/TasksReducer";
import {addTodoAC, changeTodoFilterAC, changeTodoTitleAC, removeTodoAC} from "./Components/State/TodolistsReducer";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import SearchAppBar from "./Components/AppBar";


export type TasksStateType = { [key: string]: Array<TaskType> }

function App() {
    const dispatch=useDispatch()
    const addTodolist = (title: string) => {
        const newId = v1()
        dispatch(addTodoAC(newId, title))
    }

    return (
        <div className={'background'}>
            <AppCase>
                <BobyCase>
                    <TodolistsMap/>
                </BobyCase>
                <FormCase>
                    <AddForm callback={addTodolist} title={'+'}/>
                </FormCase>
                <SearchAppBar/>
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