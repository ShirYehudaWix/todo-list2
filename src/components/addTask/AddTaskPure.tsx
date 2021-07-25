import * as React from 'react';
import style from './addTaskStyle.module.css'
import {PropsForAddTask} from "./types";
import {todoTask} from "../toDoList/task/types";

export const AddTaskPure = (props: PropsForAddTask) => {
    const [title, setTitle] = React.useState("")
    const [label, setLabel] = React.useState("")

    const addTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const idNumber=Math.random() % 1000
        const newTask: todoTask = {id:idNumber , task: title, labels: label, finished: false}
        props.setTodoList(newTask)
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
                    {
                        props.optionList.map((option,index) =>
                            <option key={index} value={option.value}>{option.label}</option>)
                    }
                </select><br/><br/>
                <button className={style.formButton} onClick={(e) => addTask(e)}>Add Task</button>
                <button className={style.formCancelButton} onClick={cancelPress}>Cancel</button>
            </form>
        </div>
    )
}

