import {combineReducers, createStore} from "redux";
import {TasksReducer} from "./TasksReducer";
import {TodolistsReducer} from "./TodolistsReducer";

export type rootReducerType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
    todolists: TodolistsReducer,
    tasks: TasksReducer
})

export const store = createStore(rootReducer)