import React, {useState} from 'react';
import './App.css';
import {FilterType, TaskType, Todolist} from './Todolist';
import styled from "styled-components";
import {v1} from "uuid";

function App() {

    const initTasks = [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Hello world", isDone: true},
        {id: v1(), title: "I am Happy", isDone: false},
        {id: v1(), title: "Yo", isDone: false}
    ]
    const [tasks, setTasks] = useState<Array<TaskType>>(initTasks)
    const [filter, setFilter] = useState<FilterType>('all')

    const removeTask = (id: string) => {
        setTasks(tasks.filter(f => f.id !== id))
    }

    let tasksForTodo = tasks
    if (filter === 'active') {
        tasksForTodo = tasks.filter(f => !f.isDone)
    }
    if (filter === 'complited') {
        tasksForTodo = tasks.filter(f => f.isDone)
    }

    const changeFilter = (filter: FilterType) => {
        setFilter(filter)
    }

    const addTask = (title: string) => {
        setTasks([{id: v1(), title: title, isDone: false}, ...tasks])
    }
    return (
        <AppCase>
            <Todolist
                title="What to learn"
                tasks={tasksForTodo}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}/>
        </AppCase>
    );
}

export default App;

const AppCase = styled.div`
  display: flex;
  justify-content: space-evenly;
`