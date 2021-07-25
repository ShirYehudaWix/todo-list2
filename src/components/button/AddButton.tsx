import * as React from 'react';
import style from './addButtonStyle.module.css'
import {PropsForAddButton} from "./types";

export const AddButton = (props: PropsForAddButton) => {
    const openAddTask = () => {
        props.setIsAddTaskOpen(true)
    }
    return (
        <>
            {!props.isAddTaskOpen && <button className={style.addButton} onClick={openAddTask}>+</button>}
        </>

    )
}