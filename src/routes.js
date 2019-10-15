import React from 'react';
import { isAuthenticated } from './auth';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={ props => 
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={ {pathname: '/', state: { from: props.location } } } />
            )           
        } 
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ () => <h1>Hello World</h1> } />
            <PrivateRoutes path="/app" component={ () => <h1>Você esta logado</h1> } />
        </Switch>
    </BrowserRouter>
);

export default Routes;

