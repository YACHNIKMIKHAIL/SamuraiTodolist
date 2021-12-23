import {TasksStateType} from "../../App";


export const TasksReducer = (state:TasksStateType,action:ActionType) => {
switch (action.type){
    case "REMOVE_TASK":{
        return {...state,[action.payload.todoID]:state[action.payload.todoID].filter(f=>f.id!==action.payload.taskID)}
    }
    return state
}

};

type ActionType = removeTaskACType

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
