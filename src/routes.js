import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated() ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//         )
//       }
//       />
//   );

function Routes(){
    return (
        <>
            <Switch>
                <Route path="/" exact component={Header} />
                <Route path="/new"    component={Header} />
            </Switch>

            <Switch>
                <Route path="/" exact component={Feed} />
                <Route path="/new" component={New} />
                <Route path="/signup" component={Signup} />            
                <Route path="/login" component={Login} />
            </Switch>                
        </>
    );
}

export default Routes;