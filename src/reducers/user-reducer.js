export default function userResucer(state , action){
    console.log('User reducer called ', state, action);
    let newState = Object.assign({},state);
    switch (action.type){
        case 'UPDATE_SEARCH_VALUE':
            newState.searchValue = action.searchValue;
            return newState;
        case 'LIST_SEARCH_RESULT':
            newState.userList = ['Bob Smith', 'Tom Smith']
            return newState;
        default:
            return state;
    }
}