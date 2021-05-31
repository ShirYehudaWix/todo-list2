import * as React from 'react';
import style from '../App/App.module.css';
import {PropsForTodoList} from "../../utils/interfaces";
import {WrappedTask} from "./WrappedTask";


export const TodoList = (props: PropsForTodoList): JSX.Element => {

    const listGenerator = (finish: boolean, classType: string): JSX.Element => {
        return <ul className={classType}>{
            props.todolst.map((todo) => (
                (todo.finished === finish) &&
                <WrappedTask key={todo.id} id={todo.id}/>
            ))
        }
        </ul>
    };

    return (
        <div> {
            listGenerator(false, style.undone)
        }
            <div className={style.differ}/>
            {
                listGenerator(true, style.checked)
            }
        </div>
    )

}

