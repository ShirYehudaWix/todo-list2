import {newTodoTask, todoTask} from "../toDoList/task/types";
import {TaskAction} from "../../store/types";

export type Option = {
    value: string,
    label: string
}

export interface PropsForAddTask {
    setTodoList: (todoList: newTodoTask) => void,
    setIsAddTaskOpen: (bool: boolean) => void,
    optionList: Option[]
}


export type DispatchForAddTask = (args: TaskAction) => TaskAction