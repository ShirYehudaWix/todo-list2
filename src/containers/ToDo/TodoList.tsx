import * as React from 'react';
import style from '../App/App.module.css';
import {PropsForTodoList} from "../../utils/interfaces";


export const TodoList = (props: PropsForTodoList): JSX.Element => {


    // const [todolst, setTodolst] = React.useState(props.todolst)
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
                    <li id={todo.id.toString()}
                        className={style[!todo.finished ? ("task" + (todo.labels ? todo.labels : "")) : "checkedTask"]}>

                        <h4 className={style.taskTitle}>ToDo: {todo.task}</h4>
                        <input type="checkbox" className={style.checkbox} checked={todo.finished}
                               onChange={() => changecheck(todo.id)}/>
                    </li>
                ))
            }
        </ul>
    }


    return (
        <div>
            {
                listGenerator(false, style.undone)
            }

            <div className={style.differ}></div>
            {
                listGenerator(true, style.checked)
            }
        </div>
    )

}
