import React from 'react';
import {TodolistType} from "../Todolist";
import {useSelector} from "react-redux";
import {rootReducerType} from "./State/store";
import {TodolistContainer} from "../TodolistContainer";

type TodolistsMapPropsType = {

}
export const TodolistsMapMemo: React.FC<TodolistsMapPropsType> = (props: TodolistsMapPropsType) => {
    const todolists = useSelector<rootReducerType, Array<TodolistType>>(state => state.todolists)


    return (
        <>
            {todolists.map(m => {
                return <TodolistContainer
                    key={m.id}
                    todolistID={m.id}/>
            })
            }
        </>
    );
};

export const TodolistsMap = React.memo(TodolistsMapMemo);