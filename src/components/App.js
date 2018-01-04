import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Auth from '../auth';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Header from './Header';
import Footer from './Footer';

import Admin from './admin';
import About from './about.js';
import { Home } from './home';
import Read from './read.js';
import Add from './add.js';
import Remove from './remove.js';
import Update from './update.js';
import Pagenotfound from './Pagenotfound';
import Login from './login/login.js';
import Logout from './login/logout.js';

export class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Header />
                    <div className="main">
                        <Switch>
                            <PrivateRoute authed={Auth.authenticate()} exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/logout" component={Logout} />
                            <Route path="/om" component={About} />
                            <Route path="/read" component={Read} />
                            <Route path="/add" component={Add} />
                            <AdminRoute authed={Auth.authenticateAdmin()} path="/remove" component={Remove} />
                            <AdminRoute authed={Auth.authenticateAdmin()} path="/update" component={Update} />
                            <AdminRoute authed={Auth.authenticateAdmin()} path="/admin" component={Admin} />
                            <Route component={Pagenotfound} />
                        </Switch>
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}


export default App;
