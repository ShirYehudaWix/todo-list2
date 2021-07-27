import {StoreState} from "../../../store/types";
import {UPDATE_TASK_FINISHED} from "../../../store/actionTypes";
import {connect} from "react-redux";
import {Task} from "./Task";
import DispatchForTask, {PropsForConnectedTask, PropsForTask} from "./types";

const mapStateToProps = (state: StoreState, ownProps: PropsForConnectedTask) => {
    const index = state.todoList.findIndex(t => t.id === ownProps.id)
    return {task: state.todoList[index]}
}
const mapDispatchToProps = (dispatch: DispatchForTask) => {
    return {
        setChecked: (id: number) => dispatch({type: UPDATE_TASK_FINISHED, id: id})
    }
}
export const ConnectedTask = connect(mapStateToProps, mapDispatchToProps)(Task)