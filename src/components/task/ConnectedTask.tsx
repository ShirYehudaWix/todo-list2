import {DispatchForTask, StoreState} from "../../store/types";
import {UPDATE_TASK_FINISHED} from "../../store/actionTypes";
import {connect} from "react-redux";
import {Task} from "./Task";
import {PropsForTask} from "./types";

const mapStateToProps = (state: StoreState, ownProps: PropsForTask) => {
    const index = state.todolst.findIndex(t => t.id === ownProps.id)
    return {task: state.todolst[index]}
}
const mapDispatchToProps = (dispatch: DispatchForTask) => {
    return {
        setChecked: (id: number) => dispatch({type: UPDATE_TASK_FINISHED, id: id})
    }
}
export const ConnectedTask = connect(mapStateToProps, mapDispatchToProps)(Task)