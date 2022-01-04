import {TasksStateType} from "../../App";
import {v1} from "uuid";
import {todolist1, todolist2, todolist3, todolist4, todolist5} from "./TodolistsReducer";

const initialTasksState: TasksStateType = {
    [todolist1]: [{id: v1(), title: "HTML&CSS", isDone: false},
        {id: v1(), title: "JS", isDone: false},
        {id: v1(), title: "ReactJS", isDone: true}],
    [todolist2]: [{id: v1(), title: "Молочко", isDone: false},
        {id: v1(), title: "Кефирчик", isDone: true},
        {id: v1(), title: "Хлеб", isDone: false}],
    [todolist3]: [{id: v1(), title: "Мульты", isDone: false},
        {id: v1(), title: "Видосик по нативке", isDone: true},
        {id: v1(), title: "Просто закрыть глаза", isDone: false}],
    [todolist4]: [{id: v1(), title: "Просто прогулка", isDone: false},
        {id: v1(), title: "Игровая", isDone: false},
        {id: v1(), title: "Гости", isDone: false},
        {id: v1(), title: "Домооооой", isDone: true}],
    [todolist5]: [{id: v1(), title: "Чай", isDone: true},
        {id: v1(), title: "Чай", isDone: true}]
}


export const TasksReducer = (state = initialTasksState, action: ActionType): TasksStateType => {
    switch (action.type) {
        case "REMOVE_TASK": {
            return {
                ...state,
                [action.payload.todoID]: state[action.payload.todoID].filter(f => f.id !== action.payload.taskID)
            }
        }
        case "ADD_TASK": {
            return {
                ...state,
                [action.payload.todoID]: [{
                    id: v1(),
                    title: action.payload.title,
                    isDone: false
                }, ...state[action.payload.todoID]]
            }
        }
        case "CHANGE_TASK_TITLE": {
            return {
                ...state,
                [action.payload.todoID]: state[action.payload.todoID].map(m => m.id === action.payload.taskID ? {
                    ...m,
                    title: action.payload.title
                } : m)
            }
        }
        case "CHANGE_TASK_STATUS": {
            return {
                ...state,
                [action.payload.todoID]: state[action.payload.todoID].map(m => m.id === action.payload.taskID ? {
                    ...m,
                    isDone: action.payload.isDone
                } : m)
            }
        }
        case "ADD_NEW_TASKS": {
            return {
                ...state, [action.payload.todoID]: []
            }
        }
        case "DELETE_TASKS": {
            let copy = {...state}
            delete copy[action.payload.todoID]
            return copy
        }
        default:
            return state
    }
}

type ActionType =
    removeTaskACType
    | addTaskACType
    | changeTaskTitleACType
    | changeTaskStatusACType
    | addNewTasksACType
    | deleteTasksACType

type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (taskID: string, todoID: string) => {
    return {
        type: 'REMOVE_TASK',
        payload: {
            todoID: todoID,
            taskID: taskID
        }
    } as const
}

type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string, todoID: string) => {
    return {
        type: 'ADD_TASK',
        payload: {
            todoID: todoID,
            title: title
        }
    } as const
}

type changeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC = (title: string, todoID: string, taskID: string) => {
    return {
        type: 'CHANGE_TASK_TITLE',
        payload: {
            todoID: todoID,
            title: title,
            taskID: taskID
        }
    } as const
}

type changeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export const changeTaskStatusAC = (isDone: boolean, taskID: string, todoID: string) => {
    return {
        type: 'CHANGE_TASK_STATUS',
        payload: {
            todoID: todoID,
            isDone: isDone,
            taskID: taskID
        }
    } as const
}

type addNewTasksACType = ReturnType<typeof addNewTasksAC>
export const addNewTasksAC = (todoID: string) => {
    return {
        type: 'ADD_NEW_TASKS',
        payload: {
            todoID: todoID
        }
    } as const
}

type deleteTasksACType = ReturnType<typeof deleteTasksAC>
export const deleteTasksAC = (todoID: string) => {
    return {
        type: 'DELETE_TASKS',
        payload: {
            todoID: todoID
        }
    } as const
}

