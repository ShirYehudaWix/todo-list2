import {TaskActions} from "./actionTypes"
import {StoreState} from "./types";
import {AnyAction} from "redux";
import {todoTask} from "../components/toDoList/task/types";

const initialState: StoreState = {
    todoList: [],
    optionList: [//Shir: optionList is hard-coded here, never changed and only used in AddTask. should it be managed in the store?
        {label: "Labels?", value: ""},
        {label: "Work", value: "Work"},
        {label: "Home", value: "Home"},
        {label: "Wife", value: "Wife"},
        {label: "Garden", value: "Garden"},]
}

const reducer = (
    state: StoreState = initialState,
    action: AnyAction
): StoreState => {
    switch (action.type) {
        case TaskActions.addTask:
            const newTask: todoTask = {
                id:  Math.random() % 1000, // not really unique
                task: action.task.task,
                labels: action.task.labels,
                finished: action.task.finished,
            }
            return {
                todoList: [...state.todoList, newTask],
                optionList: state.optionList
            }

        case TaskActions.updateTaskFinished:
            const UpdatingIndex = state.todoList.findIndex(todo => todo.id === action.id)
            const newList = state.todoList;
            newList[UpdatingIndex].finished = !newList[UpdatingIndex].finished;
            return {
                todoList: [...newList],
                optionList: state.optionList
            }
        default:
            return state
    }
}

export default reducer