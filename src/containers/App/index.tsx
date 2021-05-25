import * as React from 'react';
import style from './App.module.css';
import {TodoList} from "../ToDo/TodoList";
import {Header} from "../header/header";
import {AddTask} from "../tasksMenager/AddTask";
import {todoTask} from "../../utils/interfaces";
import {AddButton} from "../AddButton";

const App: React.FC = () => {
    const lst:todoTask[] = [
        // {id: 1, task: "go to the market",labels: "",finished:true},
        // {id: 2, task: "feed the dog",labels:"Home", finished: false},
        // {id:3, task: "feed the dog",labels:"Garden", finished: false}

    ]

    const [isAddTaskOpen,setIsAddTaskOpen]=React.useState(false)
    const [todolst,setTodolst]=React.useState([] as todoTask[]);
    const [isEmpty, setIsEmpty] = React.useState(true)
    const setIsEmptyDecorator=()=>setIsEmpty(false);


    return (
        <div className={style.root}>
            <Header></Header>
            <AddButton isAddTaskOpen={isAddTaskOpen} setIsAddTaskOpen={setIsAddTaskOpen}></AddButton>
            <div className={style.middlePage}>
                {isAddTaskOpen&&<AddTask setIsAddTaskOpen={setIsAddTaskOpen} setTodolst={setTodolst} todolst={todolst}
                                                       setIsEmpty={setIsEmptyDecorator}></AddTask>}
                {
                    !isAddTaskOpen&&<div className={style.flexContained}>
                        {isEmpty ? <img className={style.img}
                                        src="https://organisemyhouse.com/wp-content/uploads/2013/04/143.-EMPTY-TO-DO-LIST-2.jpg"></img>
                            :
                            <TodoList
                                todolst={todolst}
                                setTodolst={setTodolst}
                           ></TodoList>}
                    </div>
                }
            </div>
        </div>
    );
};

export default App;