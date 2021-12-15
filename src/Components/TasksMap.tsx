import React from 'react';
import EditableSpan from "./EditableSpan";
import {TaskType} from "../Todolist";


type TasksMapPropsType={
    tasks:Array<TaskType>
    removeTask: (id: string, todolistID: string) => void
    changeTaskTitle: (newTitle: string, todolistID: string, id: string) => void
    todolistID: string
}
const TasksMap = (props:TasksMapPropsType) => {
    const changeTaskTitle = (newTitle: string,id:string) => props.changeTaskTitle(newTitle, props.todolistID,id )
    const removeTask = (id: string) => {
        props.removeTask(id, props.todolistID)
    }
    return (
        <div>
            {props.tasks.map(m => <li key={m.id}>
                    <input className={m.isDone ? 'is-done' : ''}
                           type="checkbox" checked={m.isDone}/>
                    <EditableSpan title={m.title} callback={(e)=>changeTaskTitle(e,m.id)}/>
                    <button onClick={() => removeTask(m.id)}>x</button>
                </li>
            )}
        </div>
    );
};

export default TasksMap;