import {createStore, Store} from 'redux';
import reducer from "./reducer";
import {DispatchType, TaskAction, TaskState} from "./types";
const store: Store<TaskState, TaskAction> & {
  dispatch: DispatchType
} = createStore(reducer);

export type AppDispatch = typeof store.dispatch;

export default store;