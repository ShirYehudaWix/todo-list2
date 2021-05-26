import * as React from 'react';
import style from './App.module.css';
import {TodoList} from "../ToDo/TodoList";
import {Header} from "../header/header";
import {AddTask} from "../tasksMenager/AddTask";
import {todoTask} from "../../utils/interfaces";
import {AddButton} from "../AddButton";

const App: React.FC = () => {
    const lst:todoTask[] = [ ]

    const [isAddTaskOpen,setIsAddTaskOpen]=React.useState(false)
    const [todolst,setTodolst]=React.useState([] as todoTask[]);


    return (
        <div className={style.root}>
            <Header />
            <AddButton isAddTaskOpen={isAddTaskOpen} setIsAddTaskOpen={setIsAddTaskOpen}></AddButton>
            <div className={style.middlePage}>
                { isAddTaskOpen && 
                    <AddTask 
                        setIsAddTaskOpen={setIsAddTaskOpen} 
                        setTodolst={setTodolst} 
                        todolst={todolst}
                    />
                }
                {
                    !isAddTaskOpen &&
                    <div className={style.flexContained}>
                        {
                           todolst.length==0 ?
                                <img className={style.img} src="https://organisemyhouse.com/wp-content/uploads/2013/04/143.-EMPTY-TO-DO-LIST-2.jpg"></img>
                            :
                            <TodoList
                                todolst={todolst}
                                setTodolst={setTodolst}
                           />}
                    </div>
                }
            </div>
        </div>
    );
};

export default App;