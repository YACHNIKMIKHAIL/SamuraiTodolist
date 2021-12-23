import {FilterType, TodolistType} from "../../Todolist";

export const TodolistsReducer = (state: TodolistType[], action: ActionType) => {
    switch (action.type) {
        case "CHANGE_FILTER": {
            return state.map(m=>m.id===action.payload.todoID?{...m,filter:action.payload.filter}:m)
        }
        default:
            return state
    }
};

type ActionType = changeFilterACType

type changeFilterACType = ReturnType<typeof changeTodoFilter>
export const changeTodoFilter = (todoID:string,filter: FilterType) => {
    return {
        type: 'CHANGE_FILTER',
        payload: {
            todoID:todoID,
            filter: filter
        }
    } as const
}