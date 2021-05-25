import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

// import store from './store';
import App from "./containers/App";
import './index.css';

import { render } from "react-dom"
import { createStore, applyMiddleware, Store } from "redux"


import thunk from "redux-thunk"
import reducer from "./store/reducer"

import {DispatchType, TaskAction, TaskState} from "./store/types";

// const rootElement = document.getElementById("root")
// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     rootElement
// )


const store: Store<TaskState, TaskAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
