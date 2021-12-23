import {TasksStateType} from "../../App";
import {v1} from "uuid";


export const TasksReducer = (state:TasksStateType,action:ActionType) => {
switch (action.type){
    case "REMOVE_TASK":{
        return {...state,[action.payload.todoID]:state[action.payload.todoID].filter(f=>f.id!==action.payload.taskID)}
    }
    case "ADD_TASK":{
        return {...state,[action.payload.todoID]:[{id: v1(), title: action.payload.title, isDone: false},...state[action.payload.todoID]]}
    }
    case "CHANGE_TASK_TITLE":{
        return {...state,[action.payload.todoID]: state[action.payload.todoID].map(m=>m.id===action.payload.taskID?{...m,title:action.payload.title}:m)}
    }
    return state
}

};

type ActionType = removeTaskACType|addTaskACType|changeTaskTitleACType

type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (todoID:string, taskID: string) => {
    return {
        type: 'REMOVE_TASK',
        payload: {
            todoID:todoID,
            taskID:taskID
        }
    } as const
}

type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string,todoID:string) => {
    return {
        type: 'ADD_TASK',
        payload: {
            todoID:todoID,
            title:title
        }
    } as const
}

type changeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC = (title: string,todoID:string,taskID:string) => {
    return {
        type: 'CHANGE_TASK_TITLE',
        payload: {
            todoID:todoID,
            title:title,
            taskID:taskID
        }
    } as const
}