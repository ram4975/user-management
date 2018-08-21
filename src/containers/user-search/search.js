import {connect} from 'react-redux'
import SearchComponent from '../../components/user-search/search-component'
import {updateSearchValue, listSearchResult} from '../../actions/user-action'


// Map Redux state to component props
function mapStateToProps(state) {
    console.log('State in mapStateToProps', state);
    return {
        searchValue: state.searchValue,
        userList: state.userList
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onUpdateSearch: event => dispatch((
            updateSearchValue(event.target.value)
        )),
        listSearchResult: () => dispatch((
            listSearchResult()
        ))
    }
}

// Connected Component
const Search = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchComponent);


export default Search;