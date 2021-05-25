import * as actionTypes from "./actionTypes"
import {TaskAction, TaskState} from "./types";
import {todoTask} from "../utils/interfaces";

const initialState: TaskState = {
    todolst: [

        {id: 1, task: "go to the market", labels: "", finished: true},
        {id: 2, task: "feed the dog", labels: "Home", finished: false},
        {id: 3, task: "feed the dog", labels: "Garden", finished: false}
    ]
}

const reducer = (
    state: TaskState = initialState,
    action: TaskAction
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
                ...state,
                todolst: state.todolst.concat(newTask),
            }
        // case actionTypes.REMOVE_ARTICLE:
        //     const updatedArticles: IArticle[] = state.articles.filter(
        //         article => article.id !== action.article.id
        //     )
        //     return {
        //         ...state,
        //         articles: updatedArticles,
        //     }
        default:
            return state
    }
    // return state
}

export default reducer