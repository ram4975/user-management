import React, {Component} from 'react';
import Search from './containers/user-search/search'
import Counter from './components/counter/counter'
class App extends Component {
    render() {
        return (
            <div>
                <Search />
                <Counter />
            </div>
        );
    }
}

export default App;