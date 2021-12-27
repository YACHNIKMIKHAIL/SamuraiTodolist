import {FilterType, TodolistType} from "../../Todolist";
import {v1} from "uuid";


export const todolist1 = v1()
export const todolist2 = v1()
export const todolist3 = v1()
export const todolist4 = v1()
export const todolist5 = v1()

export const initialTodolistState:TodolistType[]=[
    {id: todolist1, title: "Что учить?", filter: 'all'},
    {id: todolist2, title: "Что покупать?", filter: 'all'},
    {id: todolist3, title: "Что посмотреть?", filter: 'all'},
    {id: todolist4, title: "Что сходить?", filter: 'all'},
    {id: todolist5, title: "Что пить?", filter: 'all'}
]

export type TodolistReducerType = (state: TodolistType[], action: ActionType) => TodolistType[]

export const TodolistsReducer: TodolistReducerType = (state=initialTodolistState , action) => {
    switch (action.type) {
        case "CHANGE_FILTER": {
            return state.map(m=>m.id===action.payload.todoID?{...m,filter:action.payload.filter}:m)
        }
        case "REMOVE_TODO": {
            return state.filter(f=>f.id!==action.payload.todoID)
        }
        case "ADD_TODO": {
            return [{id: action.payload.todoID, title: action.payload.title, filter: 'all'},...state]
        }
        case "CHANGE_TODO_TITLE": {
            return state.map(m=>m.id===action.payload.todoID?{...m,title:action.payload.title}:m)
        }
        default:
            return state
    }
};

type ActionType = changeFilterACType|removeTodoACType|addTodoACType|changeTodoTitleACType

type changeFilterACType = ReturnType<typeof changeTodoFilterAC>
export const changeTodoFilterAC = (filter: FilterType,todoID:string ) => {
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

type addTodoACType = ReturnType<typeof addTodoAC>
export const addTodoAC = (todoID:string,title:string) => {
    return {
        type: 'ADD_TODO',
        payload: {
            todoID:todoID,
            title:title
        }
    } as const
}

type changeTodoTitleACType = ReturnType<typeof changeTodoTitleAC>
export const changeTodoTitleAC = (title:string,todoID:string) => {
    return {
        type: 'CHANGE_TODO_TITLE',
        payload: {
            todoID:todoID,
            title:title
        }
    } as const
}