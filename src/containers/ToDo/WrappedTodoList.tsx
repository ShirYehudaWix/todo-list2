import {TaskState} from "../../store/types";
import {connect} from "react-redux";
import {TodoList} from "./TodoList";

const mapStateToProps = (state: TaskState) => {
    return {todolst: state.todolst}
}
export const WrappedTodoList = connect(mapStateToProps)(TodoList)