import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import { configureStore, Action } from '@reduxjs/toolkit';
import thunk, { ThunkAction } from 'redux-thunk';
import {todoTask} from "../utils/interfaces";
import reducer from "./reducer";
import {DispatchType, TaskAction, TaskState} from "./types";

export const rootReducer = combineReducers({
  todos: (state = {}, action) => ({})
});

const initialState={
  isAddTaskOpen:false,
  todolst:[],
  isEmpty:true
}


export interface IRootState {
  demo: todoTask[]
}
// const store = createStore<IRootState>(
//     combineReducers({
//       demo: reducer
//     }));


const store: Store<TaskState, TaskAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;


export default store;