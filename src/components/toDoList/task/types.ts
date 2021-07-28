import {Option} from "../../addTask/types";

export interface todoTask {
    id: number,
    task: string,
    labels: string,
    finished: boolean
}
export interface newTodoTask {//Shir: this can be constructed from todoTask using typescript pick\omit
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
//Shir: this type is also defined in store, and always imported from there
