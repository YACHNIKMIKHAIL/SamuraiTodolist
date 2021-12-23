import {FilterType, TodolistType} from "../../Todolist";

export const TodolistsReducer = (state: TodolistType[], action: ActionType) => {
    switch (action.type) {
        case "CHANGE_FILTER": {
            return state.map(m=>m.id===action.payload.todoID?{...m,filter:action.payload.filter}:m)
        }
        case "REMOVE_TODO": {
            return state.filter(f=>f.id!==action.payload.todoID)
        }
        default:
            return state
    }
};

type ActionType = changeFilterACType|removeTodoACType

type changeFilterACType = ReturnType<typeof changeTodoFilterAC>
export const changeTodoFilterAC = (todoID:string, filter: FilterType) => {
    return {
        type: 'CHANGE_FILTER',
        payload: {
            todoID:todoID,
            filter: filter
        }
    } as const
}

type removeTodoACType = ReturnType<typeof removeTodoAC>
export const removeTodoAC = (todoID:string) => {
    return {
        type: 'REMOVE_TODO',
        payload: {
            todoID:todoID
        }
    } as const
}