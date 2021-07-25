import * as React from 'react';
import style from './todoListStle.module.css';
import {ConnectedTask} from "./task/ConnectedTask";
import {PropsForTodoList} from "./types";


export const TodoList = (props: PropsForTodoList): JSX.Element => {

    const listGenerator = (finish: boolean, classType: string): JSX.Element => {
        return <ul className={classType}>{
            props.todolst.map((todo) => (
                (todo.finished === finish) &&
                <ConnectedTask key={todo.id} id={todo.id}/>
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

