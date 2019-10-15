# check routes authorization on Reactjs

## react router dom
install react router dom  
```bash
$ yarn add react-router-dom
```

 import BroweserRouter, Route, Switch, Redirect from react-router-dom package.

 like that:  
```
 import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
```

 Structure codes to routes:  
```
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ () => <h1>Hello World</h1> } />
            <PrivateRoutes path="/app" component={ () => <h1>Você esta logado</h1> } />
        </Switch>
    </BrowserRouter>
);
```

restrict private routes:

Restrict access a page. make like this.
the route component receive the props from BrowserRouter component.
the render prop in Router Component control the access for a specific restrict page if the user is logged.  
```
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
```

the function isAuthenticated get the information about this user.
i.e:  
```
export const isAuthenticated = () => true;
```
