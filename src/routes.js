import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {isAuthenticated} from './services/auth'

import Feed from './pages/Feed';
import New from './pages/New';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import { Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
      />
  );

function Routes(){
    return (
        <>
            <Switch>
                <PrivateRoute path="/" exact component={Header} />
                <PrivateRoute path="/new"    component={Header} />
            </Switch>

            <Switch>
                <PrivateRoute path="/" exact component={Feed} />
                <PrivateRoute path="/new" component={New} />
                <Route path="/signup" component={Signup} />            
                <Route path="/login" component={Login} />
            </Switch>                
        </>
    );
}

export default Routes;