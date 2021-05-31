import style from "../App/App.module.css";
import * as React from "react";
import {PropsForTask, todoTask} from "../../utils/interfaces";
import {connect} from "react-redux";
import {UPDATE_TASK_FINISHED} from "../../store/actionTypes";
import {DispatchForTask, TaskState} from "../../store/types";


export const Task = (props:PropsForTask) => {
    return (
        <li key={props.task.id} id={props.task.id.toString()}
            className={style[!props.task.finished ? ("task" + (props.task.labels ? props.task.labels : "")) : "checkedTask"]}>
            <h4 className={style.taskTitle}>ToDo: {props.task.task}</h4>
            <input type="checkbox" className={style.checkbox} checked={props.task.finished}
                   onChange={() => props.setChecked(props.task.id)}/>
        </li>
    )
}
const mapStateToProps = (state: TaskState, ownProps: PropsForTask) => {
    const index= state.todolst.findIndex(t=> t.id===ownProps.id)
    return {task: state.todolst[index]}
}
const mapDispachToProps = (dispach: DispatchForTask) => {
    return {setChecked: (id: number) => dispach({type: UPDATE_TASK_FINISHED, id: id})}
}
const FirstWrappedTask=connect(mapStateToProps)(Task);
export const WrappedTask = connect(null, mapDispachToProps)(FirstWrappedTask)
