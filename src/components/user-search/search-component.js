import React, {Component} from 'react'
import PropTypes from 'prop-types'

// React component
export default class Counter extends Component {
    render() {
        const {searchValue,onUpdateSearch} = this.props
        return (
            <div>
                <input value={searchValue} type='text' onChange={onUpdateSearch}/>
            </div>
        )
    }
}