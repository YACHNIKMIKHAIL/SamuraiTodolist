import React, {useCallback} from 'react';
import {TaskType, TodolistType} from "../Todolist";
import ButtonX from "./Button";
import styled from "styled-components";
import {Checkbox} from "./Checkbox";
import {EditableSpan} from "./EditableSpan";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./State/store";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./State/TasksReducer";


type TasksMapPropsType = {
    todolistID: string
}
export const TasksMapMemo = ({todolistID}: TasksMapPropsType) => {

    const dispatch = useDispatch()
    const removeTask = useCallback((id: string) => {
        dispatch(removeTaskAC(id, todolistID))
    }, [dispatch, todolistID])
    const changeTaskTitle = useCallback((newTitle: string, id: string) => {
        dispatch(changeTaskTitleAC(newTitle, todolistID, id))
    }, [dispatch, todolistID])
    const changeCheckbox = useCallback((isDone: boolean, id: string) => {
        dispatch(changeTaskStatusAC(isDone, id, todolistID))
    }, [dispatch, todolistID])

    const todolist = useSelector<rootReducerType, TodolistType>(state => state.todolists.filter(ft => ft.id === todolistID)[0])
    const tasks = useSelector<rootReducerType, Array<TaskType>>(state => state.tasks[todolistID])

    let tasksForTodo = tasks
    if (todolist.filter === 'active') {
        tasksForTodo = tasks.filter(f => !f.isDone)
    }
    if (todolist.filter === 'complited') {
        tasksForTodo = tasks.filter(f => f.isDone)
    }
    return (
        <TaskCase>
            {tasksForTodo.map(m => <LiCase key={m.id} className={m.isDone ? 'is-done' : ''}>
                    <CheckboxCase>
                        <Checkbox isDone={m.isDone} callback={(e) => changeCheckbox(e.currentTarget.checked, m.id)}/>
                    </CheckboxCase>
                    <EditableSpanCase>
                        <EditableSpan title={m.title} callback={(e) => changeTaskTitle(e, m.id)}/>
                    </EditableSpanCase>
                    <ButtonXCase>
                        <ButtonX callback={() => removeTask(m.id)} name={'x'}/>
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