import {connect} from "react-redux";
import {DispatchForAddTask, StoreState} from "../../store/types";
import {ADD_TASK} from "../../store/actionTypes";
import {AddTaskPure} from "./AddTaskPure";
import {todoTask} from "../task/types";

const mapStateToProps = (state:StoreState) => {
    return {optionList: state.optionList}
}

const mapDispatchToProps = (dispatch: DispatchForAddTask) => {
    return {
        setTodoList: (task: todoTask) => dispatch({type: ADD_TASK, task: task})
    }
}
export const ConnectedAddTask = connect(mapStateToProps, mapDispatchToProps)(AddTaskPure)