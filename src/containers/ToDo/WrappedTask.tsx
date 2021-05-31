import {DispatchForTask, TaskState} from "../../store/types";
import {UPDATE_TASK_FINISHED} from "../../store/actionTypes";
import {PropsForTask} from "../../utils/interfaces";
import {connect} from "react-redux";
import {Task} from "./Task";

const mapStateToProps = (state: TaskState, ownProps: PropsForTask) => {
    const index = state.todolst.findIndex(t => t.id === ownProps.id)
    return {task: state.todolst[index]}
}
const mapDispachToProps = (dispach: DispatchForTask) => {
    return {setChecked: (id: number) => dispach({type: UPDATE_TASK_FINISHED, id: id})}
}
export const WrappedTask = connect(mapStateToProps, mapDispachToProps)(Task)