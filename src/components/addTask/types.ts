import {todoTask} from "../task/types";

export type Option = {
    value: string,
    label: string
}

export interface PropsForAddTask {
    setTodoList: (todolst: todoTask) => void,
    setIsAddTaskOpen: (someVar: boolean) => void,
    optionList: Option[]
}
export interface StateForAddTask {
    setTodoList: (todolst: todoTask) => void,
    setIsAddTaskOpen: (someVar: boolean) => void,
    optionList: Option[]
}

