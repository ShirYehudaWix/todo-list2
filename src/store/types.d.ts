import {todoTask} from "../components/toDoList/task/types";
import {Option} from "../components/addTask/types"
type StoreState = {
    todolst: todoTask[],
    optionList:Option[]
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