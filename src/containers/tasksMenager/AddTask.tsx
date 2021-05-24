import * as React from 'react';
import style from '../App/App.module.css'

export const AddTask = () => {
    return (
        <div className={style.addTask}>
            <form >
                {"Title "}
                <input type="text"/><br></br><br></br>
                {"Labels? "}
                <select>
                    <option value="">None</option>
                    <option value="Work">Work</option>
                    <option value="Home">Home</option>
                    <option value="Wife">Wife</option>
                    <option value="Garden">Garden</option>
                </select><br></br><br></br>
                <button>Add Task</button>
                <button>Cancle</button>
            </form>
        </div>
    )
}