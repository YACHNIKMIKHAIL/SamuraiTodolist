import React from 'react';
import {Todolist, TodolistType} from "../Todolist";
import {TasksStateType} from "../App";
import {useSelector} from "react-redux";
import {rootReducerType} from "./State/store";

type TodolistsMapPropsType = {}
export const TodolistsMapMemo: React.FC<TodolistsMapPropsType> = (props: TodolistsMapPropsType) => {

    const tasks = useSelector<rootReducerType, TasksStateType>(state => state.tasks)
    const todolists = useSelector<rootReducerType, Array<TodolistType>>(state => state.todolists)


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
                    filter={m.filter}/>
            })
            }
        </>
    );
};

export const TodolistsMap = React.memo(TodolistsMapMemo);