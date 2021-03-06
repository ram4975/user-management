import React, {Component} from 'react'
import PropTypes from 'prop-types'

// React component

class SearchResult extends Component {
    render() {
        return(
        <div>
            <span>{this.props.name}</span>
        </div>
        )
    }
}

class Alert extends Component {
    render() {
        return(
        <div>
            <span>{this.props.alertMessage}</span>
        </div>
        )
    }
}

export default class Search extends Component {
    render() {
        const {searchValue,onUpdateSearch,listSearchResult,userList} = this.props
        let results = userList.map(function(element,i) {
                    return <SearchResult key={i} name={element} />
                });
        return (
            <div>
                <div>
                    <input value={searchValue} type='text' onChange={onUpdateSearch}/>
                    <button onClick={listSearchResult} > Search </button>
                </div>

                <div>
                    {results}
                </div>
                <Alert alertMessage={this.props.alert} />
            </div>
        )
    }
}