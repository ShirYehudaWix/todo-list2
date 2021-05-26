import * as React from 'react';
import style from '../App/App.module.css'
import {PropsForAddTask, todoTask} from "../../utils/interfaces";

export const AddTask = (props: PropsForAddTask) => {
    const [title, setTitle] = React.useState("")
    const [label, setLabel] = React.useState("")
    const addTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newTask: todoTask = {id: Math.random() % 1000, task: title, labels: label, finished: false}
        const newTodolst = [...props.todolst, newTask]// as todoTask[]
        props.setTodolst(newTodolst)
        props.setIsAddTaskOpen(false)
    }

    const cancelPress = () => {
        props.setIsAddTaskOpen(false);
    }
    return (
        <div className={style.addTask}>
            <form className={style.form}>
                <input type="text"  className={style.formInput} placeholder="What Do I Want To Accomplish?" onChange={(e) => setTitle(e.target.value)}/><br></br><br></br>
                {/*{"Labels? "}*/}
                <select className={style.formSelector} onChange={(e) => {
                    setLabel(e.target.value)
                }}>
                    <option value="">Labels?</option>
                    <option value="Work">Work</option>
                    <option value="Home">Home</option>
                    <option value="Wife">Wife</option>
                    <option value="Garden">Garden</option>
                </select><br></br><br></br>
                <button className={style.formButton} onClick={(e) => addTask(e)}>Add Task</button>
                <button className={style.formCancelButton} onClick={cancelPress}>Cancel</button>
            </form>
        </div>
    )
}