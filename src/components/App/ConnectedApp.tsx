import {connect} from "react-redux";
import {StoreState} from "../../store/types";
import {App} from "./AppPure";

const mapStateToProps = (state: StoreState) => {
    return {todolst: state.todolst}
}
export const WrappedApp = connect(mapStateToProps)(App);