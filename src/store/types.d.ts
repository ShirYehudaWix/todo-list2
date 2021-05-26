import {todoTask} from "../utils/interfaces";

// interface IArticle {
//     id: number
//     title: string
//     body: string
// }

type TaskState = {
    todolst: todoTask[]
}

type TaskAction = {
    type: string
    task: todoTask
}
type ActionForAddTask = {
    type: string
    task: todoTask
}

type DispatchType = (args: TaskAction) => TaskAction
type DispatchForAddTask = (args: TaskAction) => TaskAction