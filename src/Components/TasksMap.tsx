import React from 'react';
import EditableSpan from "./EditableSpan";
import {TaskType} from "../Todolist";


type TasksMapPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string, todolistID: string) => void
    changeTaskTitle: (newTitle: string, todolistID: string, id: string) => void
    todolistID: string
}
const TasksMap = ({tasks, removeTask, changeTaskTitle, todolistID, ...props}: TasksMapPropsType) => {
    const changeTaskTitleX = (newTitle: string, id: string) => changeTaskTitle(newTitle, todolistID, id)
    const removeTaskX = (id: string) => removeTask(id, todolistID)

    return (
        <div>
            {tasks.map(m => <li key={m.id}>
                    <input className={m.isDone ? 'is-done' : ''}
                           type="checkbox" checked={m.isDone}/>
                    <EditableSpan title={m.title} callback={(e) => changeTaskTitleX(e, m.id)}/>
                    <button onClick={() => removeTaskX(m.id)}>x</button>
                </li>
            )}
        </div>
    );
};

export default TasksMap;