import {TodolistType} from "../../Todolist";
import {v1} from "uuid";
import {addTodoAC, changeTodoFilterAC, removeTodoAC, TodolistsReducer} from "./TodolistsReducer";

test('change todo filter',()=>{
    const todolist1 = v1()
    const todolist2 = v1()
    const todolist3 = v1()
    const todolist4 = v1()
    const todolist5 = v1()

    let initTodolists: TodolistType[] = [
        {id: todolist1, title: "Что учить?", filter: 'all'},
        {id: todolist2, title: "Что покупать?", filter: 'all'},
        {id: todolist3, title: "Что посмотреть?", filter: 'all'},
        {id: todolist4, title: "Что сходить?", filter: 'all'},
        {id: todolist5, title: "Что пить?", filter: 'all'}
    ]

    const result=TodolistsReducer(initTodolists,changeTodoFilterAC(todolist2,'active'))

    expect(result[1].filter).toBe('active')
    expect(result[0].filter).toBe('all')
})

test('remove todo',()=>{
    const todolist1 = v1()
    const todolist2 = v1()
    const todolist3 = v1()
    const todolist4 = v1()
    const todolist5 = v1()

    let initTodolists: TodolistType[] = [
        {id: todolist1, title: "Что учить?", filter: 'all'},
        {id: todolist2, title: "Что покупать?", filter: 'all'},
        {id: todolist3, title: "Что посмотреть?", filter: 'all'},
        {id: todolist4, title: "Что сходить?", filter: 'all'},
        {id: todolist5, title: "Что пить?", filter: 'all'}
    ]

    const result=TodolistsReducer(initTodolists,removeTodoAC(todolist2))

    expect(result.length).toBe(4)
    expect(result[0].filter).toBe('all')
    expect(result[1].id).toBe(todolist3)
})

test('add todo',()=>{
    const todolist1 = v1()
    const todolist2 = v1()
    const todolist3 = v1()
    const todolist4 = v1()
    const todolist5 = v1()
    const newID=v1()

    let initTodolists: TodolistType[] = [
        {id: todolist1, title: "Что учить?", filter: 'all'},
        {id: todolist2, title: "Что покупать?", filter: 'all'},
        {id: todolist3, title: "Что посмотреть?", filter: 'all'},
        {id: todolist4, title: "Что сходить?", filter: 'all'},
        {id: todolist5, title: "Что пить?", filter: 'all'}
    ]

    const result=TodolistsReducer(initTodolists,addTodoAC(newID,'New title for todo'))

    expect(result.length).toBe(6)
    expect(result[0].filter).toBe('all')
    expect(result[0].id).toBe(newID)
    expect(result[0].title).toBe('New title for todo')
    expect(result[1].title).toBe("Что учить?")
})