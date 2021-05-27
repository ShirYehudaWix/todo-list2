import * as React from 'react';
import style from '../App/App.module.css';
import {PropsForTodoList} from "../../utils/interfaces";
import {Task, WrappedTask} from "./Task";
import {TaskState} from "../../store/types";
import {connect} from "react-redux";


export const TodoList = (props: PropsForTodoList): JSX.Element => {
    
    const listGenerator = (finish: boolean, classType: string): JSX.Element => {
        return <ul className={classType}>
            {
                props.todolst.map((todo) => (
                    (todo.finished === finish) &&
                    <WrappedTask task={todo} />
                ))
            }
        </ul>
    };


    return (
        <div>
            {
                listGenerator(false, style.undone)
            }
            <div className={style.differ}/>
            {
                listGenerator(true, style.checked)
            }
        </div>
    )

}

const mapStateToProps=(state:TaskState)=>{
    return {todolst:state.todolst}
}

export const WrappedTodoList = connect(mapStateToProps)(TodoList)