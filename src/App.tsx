import React, {useState} from 'react';
import './App.css';
import {FilterType, TaskType, Todolist, TodolistType} from './Todolist';
import styled from "styled-components";
import {v1} from "uuid";
import AddForm from "./Components/AddForm";
import TodolistsMap from "./Components/TodolistsMap";


export type TasksStateType = { [key: string]: Array<TaskType> }

function App() {
    const todolist1 = v1()
    const todolist2 = v1()

    let initTodolists: TodolistType[] = [
        {id: todolist1, title: "Что учить?", filter: 'all'},
        {id: todolist2, title: "Что покупать?", filter: 'all'}
    ]

    let initTasks: TasksStateType = {
        [todolist1]: [{id: v1(), title: "HTML&CSS", isDone: false},
            {id: v1(), title: "JS", isDone: false},
            {id: v1(), title: "ReactJS", isDone: true}],
        [todolist2]: [{id: v1(), title: "Молочко", isDone: false},
            {id: v1(), title: "Кефирчик", isDone: true},
            {id: v1(), title: "Хлеб", isDone: false}]
    }

    let [tasks, setTasks] = useState<TasksStateType>(initTasks)
    let [todolists, setTodolists] = useState<Array<TodolistType>>(initTodolists)


    const removeTask = (id: string, todolistID: string) => setTasks({
        ...tasks,
        [todolistID]: tasks[todolistID].filter(f => f.id !== id)
    })

    const changeFilter = (filter: FilterType, todolistID: string) => setTodolists(todolists.map(m => m.id === todolistID ? {
        ...m,
        filter: filter
    } : m))

    const addTask = (title: string, todolistID: string) => setTasks({
        ...tasks,
        [todolistID]: [{id: v1(), title: title, isDone: false}, ...tasks[todolistID]]
    })

    const removeTodolist = (todolistID: string) => setTodolists(todolists.filter(f => f.id !== todolistID))

    const addTodolist = (title: string) => {
        const newID = v1()
        setTodolists([{id: newID, title: title, filter: 'all'}, ...todolists])
        setTasks({...tasks, [newID]: []})
    }
    const changeTaskTitle = (newTitle: string, todolistID: string, id: string) => setTasks({
        ...tasks,
        [todolistID]: tasks[todolistID].map(m => m.id === id ? {...m, title: newTitle} : m)
    })

    const changeTodolistTitle = (newTitle: string, todolistID: string) => setTodolists([...todolists.map(m => m.id === todolistID ? {
        ...m,
        title: newTitle
    } : m)])


    return (
        <AppCase>
            <AddForm callback={addTodolist} title={''}/>
            <TodolistsMap todolists={todolists}
                          changeTodolistTitle={changeTodolistTitle}
                          changeTaskTitle={changeTaskTitle}
                          addTask={addTask}
                          changeFilter={changeFilter}
                          removeTask={removeTask}
                          removeTodolist={removeTodolist}
                          tasks={tasks}
            />
        </AppCase>
    );
}

export default App;

const AppCase = styled.div`
  display: flex;
  justify-content: space-evenly;
`