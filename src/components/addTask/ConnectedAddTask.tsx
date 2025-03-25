import {connect} from "react-redux";
import {StoreState} from "../../store/types";
import {TaskActions} from "../../store/actionTypes";
import {AddTaskPure} from "./AddTaskPure";
import {todoTask} from "../toDoList/task/types";
import {DispatchForAddTask} from "./types";

const mapStateToProps = (state:StoreState) => {
    return {optionList: state.optionList,aaa:'sfsdfsdfwef'}
}

const mapDispatchToProps = (dispatch: DispatchForAddTask) => {
    return {
        setTodoList: (task: todoTask) => dispatch({type: TaskActions.addTask, task: task})
    }
}
export const ConnectedAddTask = connect(mapStateToProps, mapDispatchToProps)(AddTaskPure)