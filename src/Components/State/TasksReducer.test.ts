import {v1} from "uuid";
import {TodolistType} from "../../Todolist";
import {changeTodoFilterAC, TodolistsReducer} from "./TodolistsReducer";
import {TasksStateType} from "../../App";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, TasksReducer} from "./TasksReducer";

test('remove task',()=>{
    const todolist1 = v1()
    const todolist2 = v1()
    const taskId1 = v1()
    const taskId2 = v1()
    const taskId3 = v1()
    const taskId4 = v1()
    const taskId5 = v1()
    const taskId6 = v1()

    let initTasks: TasksStateType = {
        [todolist1]: [{id: taskId1, title: "HTML&CSS", isDone: false},
            {id: taskId2, title: "JS", isDone: false},
            {id: taskId3, title: "ReactJS", isDone: true}],
        [todolist2]: [{id: taskId4, title: "Молочко", isDone: false},
            {id: taskId5, title: "Кефирчик", isDone: true},
            {id: taskId6, title: "Хлеб", isDone: false}]
    }

    const result=TasksReducer(initTasks,removeTaskAC(todolist2,taskId5))

    expect(result[todolist2].length).toBe(2)
    expect(result[todolist2][1].title).toBe("Хлеб")
})

test('add task',()=>{
    const todolist1 = v1()
    const todolist2 = v1()
    const taskId1 = v1()
    const taskId2 = v1()
    const taskId3 = v1()
    const taskId4 = v1()
    const taskId5 = v1()
    const taskId6 = v1()

    let initTasks: TasksStateType = {
        [todolist1]: [{id: taskId1, title: "HTML&CSS", isDone: false},
            {id: taskId2, title: "JS", isDone: false},
            {id: taskId3, title: "ReactJS", isDone: true}],
        [todolist2]: [{id: taskId4, title: "Молочко", isDone: false},
            {id: taskId5, title: "Кефирчик", isDone: true},
            {id: taskId6, title: "Хлеб", isDone: false}]
    }

    const result=TasksReducer(initTasks,addTaskAC('блабла',todolist2))

    expect(result[todolist2].length).toBe(4)
    expect(result[todolist2][0].title).toBe('блабла')
})

test('change task title',()=>{
    const todolist1 = v1()
    const todolist2 = v1()
    const taskId1 = v1()
    const taskId2 = v1()
    const taskId3 = v1()
    const taskId4 = v1()
    const taskId5 = v1()
    const taskId6 = v1()

    let initTasks: TasksStateType = {
        [todolist1]: [{id: taskId1, title: "HTML&CSS", isDone: false},
            {id: taskId2, title: "JS", isDone: false},
            {id: taskId3, title: "ReactJS", isDone: true}],
        [todolist2]: [{id: taskId4, title: "Молочко", isDone: false},
            {id: taskId5, title: "Кефирчик", isDone: true},
            {id: taskId6, title: "Хлеб", isDone: false}]
    }

    const result=TasksReducer(initTasks,changeTaskTitleAC('блабла',todolist2,taskId6))

    expect(result[todolist2].length).toBe(3)
    expect(result[todolist2][0].title).toBe("Молочко")
    expect(result[todolist2][2].title).toBe("блабла")
})

test('change task status',()=>{
    const todolist1 = v1()
    const todolist2 = v1()
    const taskId1 = v1()
    const taskId2 = v1()
    const taskId3 = v1()
    const taskId4 = v1()
    const taskId5 = v1()
    const taskId6 = v1()

    let initTasks: TasksStateType = {
        [todolist1]: [{id: taskId1, title: "HTML&CSS", isDone: false},
            {id: taskId2, title: "JS", isDone: false},
            {id: taskId3, title: "ReactJS", isDone: true}],
        [todolist2]: [{id: taskId4, title: "Молочко", isDone: false},
            {id: taskId5, title: "Кефирчик", isDone: true},
            {id: taskId6, title: "Хлеб", isDone: false}]
    }

    const result=TasksReducer(initTasks,changeTaskStatusAC(false,taskId3,todolist1))

    expect(result[todolist1].length).toBe(3)
    expect(result[todolist1][2].title).toBe("ReactJS")
    expect(result[todolist1][2].isDone).toBe(false)
})