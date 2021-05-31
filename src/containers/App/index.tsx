import * as React from 'react';
import style from './App.module.css';
import {WrappedTodoList} from "../ToDo/TodoList";
import {Header} from "../header/header";
import {WrappedAddTask} from "../tasksMenager/AddTask";
import {PropsForApp} from "../../utils/interfaces";
import {AddButton} from "../AddButton";
import {connect} from "react-redux";
import {TaskState} from "../../store/types";

const App = (props: PropsForApp) => {
    const [isAddTaskOpen, setIsAddTaskOpen] = React.useState(false)

    return (
        <div className={style.root}>
            <Header/>
            <AddButton isAddTaskOpen={isAddTaskOpen} setIsAddTaskOpen={setIsAddTaskOpen}/>
            <div className={style.middlePage}>
                {isAddTaskOpen &&
                <WrappedAddTask
                    setIsAddTaskOpen={setIsAddTaskOpen}/>
                }
                {
                    !isAddTaskOpen &&
                    <div className={style.flexContained}>
                        {
                            props.todolst.length == 0 ?
                                <img className={style.img}
                                     src="https://organisemyhouse.com/wp-content/uploads/2013/04/143.-EMPTY-TO-DO-LIST-2.jpg"/>
                                :
                                <WrappedTodoList/>
                        }
                    </div>
                }
            </div>
        </div>
    );
};
const mapStateToProps = (state: TaskState) => {
    return {todolst: state.todolst}
}

export const WrappedApp = connect(mapStateToProps)(App);