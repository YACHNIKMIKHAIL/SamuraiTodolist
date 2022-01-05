import React from 'react';
import {FilterType, Todolist, TodolistType} from "../Todolist";
import {TasksStateType} from "../App";
import {useSelector} from "react-redux";
import {rootReducerType} from "./State/store";

type TodolistsMapPropsType = {
    removeTask: (id: string, todolistID: string) => void
    changeFilter: (filter: FilterType, todolistID: string) => void
    addTask: (title: string, todolistID: string) => void
    removeTodolist: (todolistId: string) => void
    changeTaskTitle: (newTitle: string, todolistID: string, id: string) => void
    changeTodolistTitle: (newTitle: string, todolistID: string) => void
    changeCheckbox: (isDone: boolean, id: string, todolistID: string) => void
}
export const TodolistsMap:React.FC<TodolistsMapPropsType>= ({
                                 removeTask,
                                 changeFilter,
                                 addTask,
                                 removeTodolist,
                                 changeTaskTitle,
                                 changeTodolistTitle,
                                 ...props
                             }) => {

    const tasks = useSelector<rootReducerType, TasksStateType>(state => state.tasks)
    const todolists = useSelector<rootReducerType, Array<TodolistType>>(state => state.todolists)

    console.log(tasks)
    console.log(todolists)

    return (
        <>
            {todolists.map(m => {
                let tasksForTodo = tasks[m.id]
                if (m.filter === 'active') {
                    tasksForTodo = tasks[m.id].filter(f => !f.isDone)
                }
                if (m.filter === 'complited') {
                    tasksForTodo = tasks[m.id].filter(f => f.isDone)
                }

                return <Todolist
                    key={m.id}
                    todolistID={m.id}
                    title={m.title}
                    tasks={tasksForTodo}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    filter={m.filter}
                    removeTodolist={removeTodolist}
                    changeTaskTitle={changeTaskTitle}
                    changeTodolistTitle={changeTodolistTitle}
                    changeCheckbox={props.changeCheckbox}/>
            })
            }
        </>
    );
};

export default TodolistsMap;