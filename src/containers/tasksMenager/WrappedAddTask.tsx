import {connect} from "react-redux";
import {DispatchForAddTask} from "../../store/types";
import {todoTask} from "../../utils/interfaces";
import {ADD_TASK} from "../../store/actionTypes";
import {AddTask} from "./AddTask";

const mapDispachToProps = (dispach: DispatchForAddTask) => {
    return {
        setTodolst: (task: todoTask) => dispach({type: ADD_TASK, task: task})

    }
}
export const WrappedAddTask = connect(null, mapDispachToProps)(AddTask)