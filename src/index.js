import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import store from './store/store'
//import App from './App';
import AppRoutes from './routes';

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>
    , document.getElementById('root'));