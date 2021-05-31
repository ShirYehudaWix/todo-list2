import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';

import store from './store';
import {WrappedApp} from "./containers/App";
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <WrappedApp/>
    </Provider>,
    document.getElementById('root')
);
