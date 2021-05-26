import * as actionTypes from "./actionTypes"
import {TaskAction, TaskState} from "./types";
import {todoTask} from "../utils/interfaces";
import {AnyAction} from "redux";

const initialState: TaskState = {
    todolst: [

        {id: 1, task: "go to the market", labels: "", finished: true},
        {id: 2, task: "feed the dog", labels: "Home", finished: false},
        {id: 3, task: "feed the dog", labels: "Garden", finished: false}
    ]
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
            const UpdatingIndex=state.todolst.findIndex(todo=>todo.id===action.id)
            const newList=state.todolst;
            newList[UpdatingIndex].finished=!newList[UpdatingIndex].finished;
            return{
                todolst:[...newList]
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