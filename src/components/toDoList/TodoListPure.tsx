import * as React from 'react';
import style from './todoListStle.module.css';
import {ConnectedTask} from "./task/ConnectedTask";
import {PropsForTodoList} from "./types";

//Shir: general note - not sure if task should be inside toDoList, and maybe separate into connected and pure folders

export const TodoListPure = (props: PropsForTodoList): JSX.Element => {

    const listGenerator = (finish: boolean, classType: string): JSX.Element => {
        return <ul className={classType}>{
            props.todoList.map((todo) => (
                (todo.finished === finish) &&
                <ConnectedTask key={todo.id} id={todo.id}/>
            ))
        }
        </ul>
    };

    return (
        <div> {
            listGenerator(false, style.undone)// Shir: maybe use done/undone or checked/unchecked to be consistent
        }
            <div className={style.differ}/>
            {
                listGenerator(true, style.checked)
            }
        </div>
    )

}

