import * as React from 'react';
import style from '../App/App.module.css'
import {PropsForAddTask, todoTask} from "../../utils/interfaces";
import {DispatchForAddTask} from "../../store/types";
import {ADD_TASK} from "../../store/actionTypes";
import {connect} from "react-redux";

export const AddTask = (props: PropsForAddTask) => {
    const [title, setTitle] = React.useState("")
    const [label, setLabel] = React.useState("")
    const addTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newTask: todoTask = {id: Math.random() % 1000, task: title, labels: label, finished: false}
        props.setTodolst(newTask)
        props.setIsAddTaskOpen(false)
    }
    const cancelPress = () => {
        props.setIsAddTaskOpen(false);
    }
    return (
        <div className={style.addTask}>
            <form className={style.form}>
                <input type="text" className={style.formInput} placeholder="What Do I Want To Accomplish?"
                       onChange={(e) => setTitle(e.target.value)}/><br/><br/>
                <select className={style.formSelector} onChange={(e) => {
                    setLabel(e.target.value)
                }}>
                    <option value="">Labels?</option>
                    <option value="Work">Work</option>
                    <option value="Home">Home</option>
                    <option value="Wife">Wife</option>
                    <option value="Garden">Garden</option>
                </select><br/><br/>
                <button className={style.formButton} onClick={(e) => addTask(e)}>Add Task</button>
                <button className={style.formCancelButton} onClick={cancelPress}>Cancel</button>
            </form>
        </div>
    )
}

const mapDispachToProps=(dispach:DispatchForAddTask)=>{
    return {
        setTodolst:(task:todoTask)=>dispach({type:ADD_TASK,task:task})

    }
}

export const WrappedAddTask= connect(null, mapDispachToProps)(AddTask)