import React, {useState} from 'react';

export type FilterType='all'|'complited'|'active'
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask:(id:string)=>void
    changeFilter:(filter:FilterType)=>void
    addTask:(title:string)=>void
}

export function Todolist(props: PropsType) {
    const[title,setTitle]=useState<string>('')

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={(e)=>setTitle(e.currentTarget.value)}/>
            <button onClick={()=>props.addTask(title)}>+</button>
        </div>
        <ul>
            {props.tasks.map(m=><li key={m.id}>
                <input type="checkbox" checked={m.isDone}/>
                <span>{m.title}</span>
                <button onClick={()=>props.removeTask(m.id)}>x</button>
            </li>
            )}


        </ul>
        <div>
            <button onClick={()=>props.changeFilter('all')}>All</button>
            <button onClick={()=>props.changeFilter('active')}>Active</button>
            <button onClick={()=>props.changeFilter('complited')}>Completed</button>
        </div>
    </div>
}
