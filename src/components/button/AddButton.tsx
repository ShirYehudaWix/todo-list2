import * as React from 'react';
import style from './addButtonStyle.module.css'
import {PropsForAddButton} from "./types";

export const AddButton = (props: PropsForAddButton) => {
    return (
        <button className={style.addButton} onClick={props.setIsAddTaskOpen}>+</button>

    )
}