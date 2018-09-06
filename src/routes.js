import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './app';
import Counter from './components/counter/counter';
export default () => {
 return (
   <BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/counter' component={Counter}/>
    </Switch>
   </BrowserRouter>
 )
}