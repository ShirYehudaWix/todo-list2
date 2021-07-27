import style from "./taskStyle.module.css";
import * as React from "react";
import {PropsForTask} from "./types";

export const Task = (props: PropsForTask) => {
    return (
        <li key={props.id} id={props.task.id}
            className={style[!props.task.finished ? ("task" + (props.task.labels ? props.task.labels : "")) : "checkedTask"]}>
            <h4 className={style.taskTitle}>ToDo: {props.task.task}</h4>
            <input type="checkbox" className={style.checkbox} checked={props.task.finished}
                   onChange={() => props.setChecked(props.task.id)}/>
        </li>
    )
}

