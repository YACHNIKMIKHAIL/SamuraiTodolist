import React, {ChangeEvent, useCallback} from 'react';
import {FilterType, TaskType} from "../Todolist";
import ButtonX from "./Button";
import styled from "styled-components";
import {Checkbox} from "./Checkbox";
import {EditableSpan} from "./EditableSpan";
import {useSelector} from "react-redux";
import {rootReducerType} from "./State/store";


type TasksMapPropsType = {
    filter: FilterType
    removeTask: (id: string, todolistID: string) => void
    changeTaskTitle: (newTitle: string, todolistID: string, id: string) => void
    todolistID: string
    changeCheckbox: (isDone: boolean, id: string, todolistID: string) => void
}
export const TasksMapMemo = ({removeTask, changeTaskTitle, todolistID, ...props}: TasksMapPropsType) => {
    const changeTaskTitleX = useCallback((newTitle: string, id: string) => changeTaskTitle(newTitle, todolistID, id), [changeTaskTitle, todolistID])
    const removeTaskX = useCallback((id: string) => removeTask(id, todolistID), [removeTask, todolistID])
    const ChangeCheckboxX = useCallback((e: ChangeEvent<HTMLInputElement>, id: string) => props.changeCheckbox(e.currentTarget.checked, id, todolistID), [todolistID,props])

    const tasks = useSelector<rootReducerType, Array<TaskType>>(state => state.tasks[todolistID])

    let tasksForTodo = tasks
    if (props.filter === 'active') {
        tasksForTodo = tasks.filter(f => !f.isDone)
    }
    if (props.filter === 'complited') {
        tasksForTodo = tasks.filter(f => f.isDone)
    }
    return (
        <TaskCase>
            {tasksForTodo.map(m => <LiCase key={m.id} className={m.isDone ? 'is-done' : ''}>
                    <CheckboxCase>
                        <Checkbox isDone={m.isDone} callback={(e) => ChangeCheckboxX(e, m.id)}/>
                    </CheckboxCase>
                    <EditableSpanCase>
                        <EditableSpan title={m.title} callback={(e) => changeTaskTitleX(e, m.id)}/>
                    </EditableSpanCase>
                    <ButtonXCase>
                        <ButtonX callback={() => removeTaskX(m.id)} name={'x'}/>
                    </ButtonXCase>
                </LiCase>
            )}
        </TaskCase>
    );
};

export const TasksMap = React.memo(TasksMapMemo);

const TaskCase = styled.div`
`
const LiCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
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