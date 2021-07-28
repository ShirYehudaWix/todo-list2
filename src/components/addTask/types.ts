import {newTodoTask, todoTask} from "../toDoList/task/types";

type TaskAction = {//Shir: this is not used anywhere (also defined in store)
    type: string
    task: todoTask
}

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