import * as React from 'react';
import style from './App/App.module.css'
import {PropsForAddButton} from "../utils/interfaces";

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