import {StoreState} from "../../../store/types";
import {TaskActions} from "../../../store/actionTypes";
import {connect} from "react-redux";
import {Task} from "./TaskPure";
import {DispatchForTask, PropsForConnectedTask} from "./types";

const mapStateToProps = (state: StoreState, ownProps: PropsForConnectedTask) => {
    const index = state.todoList.findIndex(t => t.id === ownProps.id)
    return {task: state.todoList[index]}
}
const mapDispatchToProps = (dispatch: DispatchForTask) => {
    return {
        setChecked: (id: number) => dispatch({type: TaskActions.updateTaskFinished, id: id})
    }
}
export const ConnectedTask = connect(mapStateToProps, mapDispatchToProps)(Task)