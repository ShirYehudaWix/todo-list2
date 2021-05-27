import style from "../App/App.module.css";
import * as React from "react";
import {PropsForTask} from "../../utils/interfaces";
import {connect} from "react-redux";
import {UPDATE_TASK_FINISHED} from "../../store/actionTypes";
import {DispatchForTask} from "../../store/types";


export const Task = (props: PropsForTask) => {
    return (
        <li key={props.task.id} id={props.task.id.toString()}
            className={style[!props.task.finished ? ("task" + (props.task.labels ? props.task.labels : "")) : "checkedTask"]}>
            <h4 className={style.taskTitle}>ToDo: {props.task.task}</h4>
            <input type="checkbox" className={style.checkbox} checked={props.task.finished}
                   onChange={() => props.setChecked(props.task.id)}/>
        </li>
    )
}
const mapDispachToProps=(dispach:DispatchForTask)=>{
    return{setChecked:(id:number)=>dispach({type:UPDATE_TASK_FINISHED,id:id})}
}
export const WrappedTask = connect(null,mapDispachToProps)(Task)
