import {todoTask} from "../utils/interfaces";

type TaskState = {
    todolst: todoTask[]
}

type TaskAction = {
    type: string
    task: todoTask
}
type ActionForTask = {
    type: string
    id: number
}

type DispatchType = (args: TaskAction) => TaskAction
type DispatchForAddTask = (args: TaskAction) => TaskAction
type DispatchForTask = (args: ActionForTask) => ActionForTask