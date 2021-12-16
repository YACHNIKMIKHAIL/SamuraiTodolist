import React, {ChangeEvent} from 'react';
import EditableSpan from "./EditableSpan";
import {TaskType} from "../Todolist";
import Checkbox from "./Checkbox";
import ButtonX from "./Button";


type TasksMapPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string, todolistID: string) => void
    changeTaskTitle: (newTitle: string, todolistID: string, id: string) => void
    todolistID: string
    changeCheckbox:(isDone:boolean,id:string,todolistID:string)=>void
}
const TasksMap = ({tasks, removeTask, changeTaskTitle, todolistID, ...props}: TasksMapPropsType) => {
    const changeTaskTitleX = (newTitle: string, id: string) => changeTaskTitle(newTitle, todolistID, id)
    const removeTaskX = (id: string) => removeTask(id, todolistID)
    const ChangeCheckboxX = (e: ChangeEvent<HTMLInputElement>,id:string) => props.changeCheckbox(e.currentTarget.checked, id, todolistID)


    return (
        <div>
            {tasks.map(m => <li key={m.id} className={m.isDone ? 'is-done' : ''}>
                <Checkbox isDone={m.isDone} callback={(e)=>ChangeCheckboxX(e,m.id)}/>
                    <EditableSpan title={m.title} callback={(e) => changeTaskTitleX(e, m.id)}/>
                    {/*<button onClick={() => removeTaskX(m.id)}>x</button>*/}
                <ButtonX callback={() => removeTaskX(m.id)} name={'x'}/>
                </li>
            )}
        </div>
    );
};

export default TasksMap;