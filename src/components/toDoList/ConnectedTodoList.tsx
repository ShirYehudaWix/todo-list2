import {StoreState} from "../../store/types";
import {connect} from "react-redux";
import {TodoListPure} from "./TodoListPure";

const mapStateToProps = (state: StoreState) => {
    return {todoList: state.todoList}
}
export const ConnectedTodoList = connect(mapStateToProps)(TodoListPure)