import {createStore, combineReducers, applyMiddleware} from 'redux'
import userResucer from '../reducers/user-reducer'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'


var initialState = {
    searchValue: '',
    userList: []
}
const middleware = applyMiddleware(thunk, createLogger()); 
const store = createStore(userResucer,initialState,middleware,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;