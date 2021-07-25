import * as actionTypes from "./actionTypes"
import {StoreState} from "./types";
import {AnyAction} from "redux";
import {todoTask} from "../components/toDoList/task/types";

const initialState: StoreState = {
    todolst: [],
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
                id: action.task.id, // not really unique
                task: action.task.task,
                labels: action.task.labels,
                finished: action.task.finished,
            }
            return {
                todolst: [...state.todolst, newTask],
                optionList: state.optionList
            }

        case actionTypes.UPDATE_TASK_FINISHED:
            const UpdatingIndex = state.todolst.findIndex(todo => todo.id === action.id)
            const newList = state.todolst;
            newList[UpdatingIndex].finished = !newList[UpdatingIndex].finished;
            return {
                todolst: [...newList],
                optionList: state.optionList
            }
        default:
            return state
    }
}

export default reducer