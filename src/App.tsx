import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import styled from "styled-components";

function App() {

    const initTasks = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Hello world", isDone: true},
        {id: 5, title: "I am Happy", isDone: false},
        {id: 6, title: "Yo", isDone: false}
    ]
    const [tasks,setTasks]=useState(initTasks)

    const removeTask=(id:number)=>{
        setTasks(tasks.filter(f=>f.id!==id))
    }

    return (
        <AppCase>
            <Todolist title="What to learn" tasks={tasks} removeTask={removeTask}/>
        </AppCase>
    );
}

export default App;

const AppCase = styled.div`
  display: flex;
  justify-content: space-evenly;
`