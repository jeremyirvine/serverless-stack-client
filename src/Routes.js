import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import NewNote from './containers/NewNote';
import NotFound from './containers/NotFound';
import Signup from './containers/Signup';
import Notes from "./containers/Notes";
import Settings from './containers/Settings';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';
import ResetPassword from './containers/ResetPassword';
import ChangePassword from './containers/ChangePassword';
import ChangeEmail from './containers/ChangeEmail';

const Routes = () => {
    return ( 
        <Switch>
            <Route exact path="/" component={Home} />
            <UnauthenticatedRoute path="/login/reset" component={ResetPassword} />
            <UnauthenticatedRoute path="/login" component={Login} />
            <UnauthenticatedRoute path="/signup" component={Signup} />
            <AuthenticatedRoute path="/notes/new" component={NewNote} />
            <AuthenticatedRoute path="/notes/:id" component={Notes} />
            <AuthenticatedRoute path="/settings/password" component={ChangePassword} />
            <AuthenticatedRoute path="/settings/email" component={ChangeEmail} />
            <AuthenticatedRoute path="/settings" component={Settings} />
            <Route component={NotFound} />
        </Switch>
     );
}
 
export default Routes;