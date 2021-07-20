import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';

import store from './store';
import './index.css';
import {WrappedApp} from "./components/App/ConnectedApp";

ReactDOM.render(
    <Provider store={store}>
        <WrappedApp/>
    </Provider>,
    document.getElementById('root')
);
