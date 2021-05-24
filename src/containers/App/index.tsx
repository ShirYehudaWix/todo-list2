import * as React from 'react';
import style from './App.module.css';
import {TodoList} from "../ToDo/TodoList";
import {Header} from "../header/header";
import {AddTask} from "../tasksMenager/AddTask";

const App: React.FC = () => {
    const lst = [
        {id: 1, task: "go to the market",finished:true},
        {id: 2, task: "feed the dog",labels:"home", finished: false},
        {id:3, task: "feed the dog",labels:"garden", finished: false}
    ]
    const [todolst,setTodolst]=React.useState(lst);
    const [isEmpty, setIsEmpty] = React.useState(false)
    return (
        <div className={style.root}>
            <Header></Header>
            <div className={style.middlePage}>
                <AddTask></AddTask>
                {
                    <div className={style.flexContained}>
                        {isEmpty ? <img className={style.img}
                                        src="https://organisemyhouse.com/wp-content/uploads/2013/04/143.-EMPTY-TO-DO-LIST-2.jpg"></img>
                            :
                            <TodoList
                                todolst={lst}
                           ></TodoList>}
                    </div>
                }
            </div>
        </div>
    );
};

export default App;