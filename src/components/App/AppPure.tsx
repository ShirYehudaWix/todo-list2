import * as React from 'react';
import style from './App.module.css';
import {Header} from "../header/header";
import {AddButton} from "../button/AddButton";
import {ConnectedAddTask} from "../addTask/ConnectedAddTask";
import {ConnectedTodoList} from "../toDoList/ConnectedTodoList";
import {PropsForApp} from "./types";

export const App = (props: PropsForApp) => {
    const [isAddTaskOpen, setIsAddTaskOpen] = React.useState(false)

    return (
        <div className={style.root}>
            <Header/>
            <AddButton isAddTaskOpen={isAddTaskOpen} setIsAddTaskOpen={setIsAddTaskOpen}/>
            <div className={style.middlePage}>
                {isAddTaskOpen && <ConnectedAddTask setIsAddTaskOpen={setIsAddTaskOpen}/>}
                {
                    !isAddTaskOpen &&
                    <div className={style.flexContained}>
                        {
                            props.todolst.length == 0 ?
                                <img className={style.img}
                                     src="https://organisemyhouse.com/wp-content/uploads/2013/04/143.-EMPTY-TO-DO-LIST-2.jpg"/>
                                :
                                <ConnectedTodoList/>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

