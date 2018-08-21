import {createStore, combineReducers} from 'redux'
import userResucer from '../reducers/user-reducer'
var initialState = {
    searchValue: '',
    userList: []
}
const store = createStore(userResucer,initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;