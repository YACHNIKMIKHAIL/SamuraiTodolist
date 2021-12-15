import React from 'react';
import {FilterType, Todolist, TodolistType} from "../Todolist";
import {TasksStateType} from "../App";

type TodolistsMapPropsType = {
    tasks: TasksStateType
    removeTask: (id: string, todolistID: string) => void
    changeFilter: (filter: FilterType, todolistID: string) => void
    addTask: (title: string, todolistID: string) => void
    removeTodolist: (todolistId: string) => void
    changeTaskTitle: (newTitle: string, todolistID: string, id: string) => void
    changeTodolistTitle: (newTitle: string, todolistID: string) => void
    todolists: Array<TodolistType>
}
export const TodolistsMap = ({
                                 tasks,
                                 removeTask,
                                 changeFilter,
                                 addTask,
                                 removeTodolist,
                                 changeTaskTitle,
                                 changeTodolistTitle,
                                 ...props
                             }: TodolistsMapPropsType) => {
    return (
        <div>
            {props.todolists.map(m => {
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
                    changeTodolistTitle={changeTodolistTitle}/>
            })
            }
        </div>
    );
};

export default TodolistsMap;