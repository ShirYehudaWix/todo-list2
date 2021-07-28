import * as React from 'react';
import style from './App.module.css';
import {Header} from "../header/header";
import {AddButton} from "../button/AddButton";
import {ConnectedAddTask} from "../addTask/ConnectedAddTask";
import {ConnectedTodoList} from "../toDoList/ConnectedTodoList";
import {PropsForApp} from "./types";

export const App = (props: PropsForApp) => {
    const [isAddTaskOpen, setIsAddTaskOpen] = React.useState(false)
    //Shir: why do you use react useState here and not redux?
    const openAddTask = () => {
        setIsAddTaskOpen(true)
    }
    return (//Shir: both AddButton and ConnectedTodoList are shown only if !isAddTaskOpen. maybe they should be in the smae component, which is rendered when !isAddTaskOpen.
        <div className={style.root}>
            <Header/>
            {!isAddTaskOpen&&<AddButton  setIsAddTaskOpen={openAddTask}/>}
            <div className={style.middlePage}>
                {isAddTaskOpen ?
                    <ConnectedAddTask setIsAddTaskOpen={setIsAddTaskOpen}/>
                    :
                    <div className={style.flexContained}>
                        {
                            props.todoList.length == 0 ?
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

