import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';
import Login from './pages/Login';
import Signup from './pages/Signup';


function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/new" component={New} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />            
        </Switch>
    );
}

export default Routes;