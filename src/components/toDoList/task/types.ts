import {Option} from "../../addTask/types";

export interface todoTask {
    id: number,
    task: string,
    labels: string,
    finished: boolean
}
export interface newTodoTask {
    task: string,
    labels: string,
    finished: boolean
}

export interface PropsForTask {
    task: todoTask,
    id: number,
    setChecked: (id: number) => void
}
export interface PropsForConnectedTask {
    id: number,
}
export type DispatchForTask=(args:ActionForTask)=>ActionForTask

type ActionForTask = {
    type: string
    id: number
}

export type StoreState = {
    todoList: todoTask[],
    optionList:Option[]
}

