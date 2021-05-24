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
                    <option>work</option>
                    <option value="home">home</option>
                    <option>wife</option>
                    <option>garden</option>
                </select><br></br><br></br>
                <button>Add Task</button>
                <button>Cancle</button>
            </form>
        </div>
    )
}