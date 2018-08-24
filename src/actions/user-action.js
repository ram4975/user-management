import axios from 'axios'

export const updateSearchValue = (searchValue) => {
    console.log('Search Action called');
    return {
        type: 'UPDATE_SEARCH_VALUE',
        searchValue: searchValue,
    }
}

export const listSearchResult = () => {
   /*return {
        type: 'LIST_SEARCH_RESULT'

    }*/

    /*const fetchUsers = axios.get('http://localhost:3000/users');

    return (dispatch) => {
        fetchUsers.then( (payload)=> {
            dispatch({type: 'LIST_SEARCH_RESULT', userList: payload.data})
        })
    }*/

    return {
        type: 'LIST_SEARCH',
        payload: axios.get('http://localhost:3000/users')
    }
}