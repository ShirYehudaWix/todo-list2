import {StoreState} from "../../store/types";
import {connect} from "react-redux";
import {TodoList} from "./TodoList";

const mapStateToProps = (state: StoreState) => {
    return {todolst: state.todolst}
}
export const ConnectedTodoList = connect(mapStateToProps)(TodoList)