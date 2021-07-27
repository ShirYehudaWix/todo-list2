import {todoTask} from "../components/toDoList/task/types";
import {Option} from "../components/addTask/types"

type StoreState = {
    todoList: todoTask[],
    optionList:Option[]
}

type TaskAction = {
    type: string
    task: todoTask
}


type DispatchType = (args: TaskAction) => TaskAction
