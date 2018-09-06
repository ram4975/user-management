import React, {Component} from 'react';
import Search from './containers/user-search/search'
//import Counter from './components/counter/counter'
import {Link} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Link to='/counter'>Counter</Link>
                <Search />
            </div>
        );
    }
}

export default App;