import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import {
    HashRouter,
    Redirect,
    NavLink,
    Route,
    Switch,
    BrowserRouter
} from 'react-router-dom';
import './css/app.css';
import {SignIn} from './SignIn';
import {SignUp} from './SignUp';

import {Home} from './Home';

const App = ({selected, successLogin, user}) => {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path = "/home" render={() => <Home successLogin={successLogin} user={user}/>}/>
                    <Route exact path="/" render={() => <SignIn successLogin={successLogin} SignUp={SignUp} />}/>
                    <Route path="/sign_up" render={() => <SignUp successLogin={successLogin} />}/>
                    <Route path="/sign_in"  render={() => <SignIn successLogin={successLogin} SignUp={SignUp}  />}/>
                    <Route path='/reydelsur' render={() => <Redirect to="/sign_in"/>}/>
                </Switch>
            </HashRouter>
        </div>
    )
}
const mapToProps = ({ selected, successLogin, user }) => ({ selected, successLogin, user });

export default connect(mapToProps)(App);