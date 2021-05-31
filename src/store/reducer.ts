import * as actionTypes from "./actionTypes"
import {TaskState} from "./types";
import {todoTask} from "../utils/interfaces";
import {AnyAction} from "redux";

const initialState: TaskState = {
    todolst: []
}

const reducer = (
    state: TaskState = initialState,
    action: AnyAction
): TaskState => {
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
            }
        case actionTypes.UPDATE_TASK_FINISHED:
            const UpdatingIndex = state.todolst.findIndex(todo => todo.id === action.id)
            const newList = state.todolst;
            newList[UpdatingIndex].finished = !newList[UpdatingIndex].finished;
            return {
                todolst: [...newList]
            }
        default:
            return state
    }
}

export default reducer