import * as actionTypes from "./actionTypes"
import {todoTask} from "../utils/interfaces";
import {DispatchType, TaskAction} from "./types";
export function addTask(task: todoTask) {
    const action: TaskAction = {
        type: actionTypes.ADD_TASK,
        task: task,
    }

    return simulateHttpRequest(action)
}

// export function removeArticle(article: todoTask) {
//     const action: ArticleAction = {
//         type: actionTypes.REMOVE_ARTICLE,
//         article,
//     }
//     return simulateHttpRequest(action)
// }

export function simulateHttpRequest(action: TaskAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}
