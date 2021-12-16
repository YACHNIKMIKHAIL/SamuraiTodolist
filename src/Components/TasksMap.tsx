import React, {ChangeEvent} from 'react';
import EditableSpan from "./EditableSpan";
import {TaskType} from "../Todolist";
import Checkbox from "./Checkbox";
import ButtonX from "./Button";
import styled from "styled-components";


type TasksMapPropsType = {
    tasks: Array<TaskType>
    removeTask: (id: string, todolistID: string) => void
    changeTaskTitle: (newTitle: string, todolistID: string, id: string) => void
    todolistID: string
    changeCheckbox: (isDone: boolean, id: string, todolistID: string) => void
}
const TasksMap = ({tasks, removeTask, changeTaskTitle, todolistID, ...props}: TasksMapPropsType) => {
    const changeTaskTitleX = (newTitle: string, id: string) => changeTaskTitle(newTitle, todolistID, id)
    const removeTaskX = (id: string) => removeTask(id, todolistID)
    const ChangeCheckboxX = (e: ChangeEvent<HTMLInputElement>, id: string) => props.changeCheckbox(e.currentTarget.checked, id, todolistID)


    return (
        <TaskCase>
            {tasks.map(m => <LiCase key={m.id} className={m.isDone ? 'is-done' : ''}>
                    <CheckboxCase>
                        <Checkbox isDone={m.isDone} callback={(e) => ChangeCheckboxX(e, m.id)}/>
                    </CheckboxCase>
                    <EditableSpanCase>
                        <EditableSpan title={m.title} callback={(e) => changeTaskTitleX(e, m.id)}/>
                    </EditableSpanCase>
                    {/*<button onClick={() => removeTaskX(m.id)}>x</button>*/}
                    <ButtonXCase>
                        <ButtonX callback={() => removeTaskX(m.id)} name={'x'}/>
                    </ButtonXCase>
                </LiCase>
            )}
        </TaskCase>
    );
};

export default TasksMap;

const TaskCase = styled.div`

`
const LiCase = styled.li`
  display: flex;
  justify-content: space-between;
`
const CheckboxCase = styled.li`
`
const EditableSpanCase = styled.li`
  color: #121819;
  display: flex;
`
const ButtonXCase = styled.li`
  display: flex;
`