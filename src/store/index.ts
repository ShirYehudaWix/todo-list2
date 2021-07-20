import {createStore, Store} from 'redux';
import reducer from "./reducer";
import {DispatchType, TaskAction, StoreState} from "./types";

const store: Store<StoreState, TaskAction> & {
  dispatch: DispatchType
} = createStore(reducer);

export default store;