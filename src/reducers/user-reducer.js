export default function userResucer(state , action){
    console.log('User reducer called ', state, action);
    let newState = Object.assign({},state);
    switch (action.type){
        case 'UPDATE_SEARCH_VALUE':
            newState.searchValue = action.searchValue;
            return newState;
        case 'LIST_SEARCH_PENDING':
            console.log('Search user async started...');
            newState.alert = ''
            return newState;
        case 'LIST_SEARCH_FULFILLED':
            //newState.userList = ['Bob Smith', 'Tom Smith']
            newState.userList = action.payload.data;
            return newState;
        case 'LIST_SEARCH_REJECTED':
            //newState.userList = ['Bob Smith', 'Tom Smith']
            newState.alert = action.payload.message;
            return newState;
        /*case 'LIST_SEARCH_RESULT':
            //newState.userList = ['Bob Smith', 'Tom Smith']
            newState.userList = action.userList;
            return newState;*/
        default:
            return state;
    }
}