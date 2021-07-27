import * as actionTypes from "./actionTypes"
import {StoreState} from "./types";
import {AnyAction} from "redux";
import {todoTask} from "../components/toDoList/task/types";

const initialState: StoreState = {
    todoList: [],
    optionList: [
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
        case actionTypes.ADD_TASK:
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

        case actionTypes.UPDATE_TASK_FINISHED:
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