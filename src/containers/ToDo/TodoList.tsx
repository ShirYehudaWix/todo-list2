import * as React from 'react';
import style from '../App/App.module.css';
import {PropsForTodoList} from "../../utils/interfaces";
import {Task} from "./Task";


export const TodoList = (props: PropsForTodoList): JSX.Element => {
    const changecheck = (id: number) => {
        const updatedElements = [...props.todolst]
        const updatedIndex = updatedElements.findIndex(t => t.id === id);
        updatedElements[updatedIndex] = {
            ...updatedElements[updatedIndex],
            finished: !updatedElements[updatedIndex].finished
        }
        props.setTodolst(updatedElements)
    }
    const listGenerator = (finish: boolean, classType: string): JSX.Element => {
        return <ul className={classType}>
            {
                props.todolst.map((todo) => (
                    (todo.finished === finish) &&
                    <Task task={todo} setChecked={changecheck}/>
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
