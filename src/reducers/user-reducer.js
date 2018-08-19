export default function userResucer(state , action){
    console.log('User reducer called ', state, action);
    switch (action.type){
        case 'UPDATE_SEARCH_VALUE':
            let newState = Object.assign({},state);
            newState.searchValue = action.searchValue;
            return newState;
        default:
            return state;
    }
}