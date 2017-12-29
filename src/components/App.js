import React, { Component } from 'react';
// import {Router, Route} from 'react-router-dom';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// import {requireAuth} from '../auth';
// import Home from './home.js';
import About from './about.js';
import { Home } from './home';
// import Read from './read.js';
// import Add from './add.js';
// import Remove from './remove.js';
// import Update from './update.js';
import Login from './login/login.js';
import Logout from './login/logout.js';
// import Secret from './secret.js';
// import EnsureLoggedInContainer from './login/ensureloggedin.js';
// import PageNotFound from './Pagenotfound.js';

// components
// import Header from './components/Header.js';
// import Site from './Site.js';

export class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="site-header">
                        <div className="centeredmenu">
                            <ul className="site-navbar primary-nav">
                                <li><Link to="/">Start</Link></li>
                                <li><Link to="/om">Om</Link></li>
                                <li><Link to="/read">Mongodb</Link>
                                    <ul>
                                        <li><Link to="/read">Read</Link></li>
                                        <li><Link to="/add">Add</Link></li>
                                        <li><Link to="/remove">Remove</Link></li>
                                        <li><Link to="/update">Update</Link></li>
                                    </ul></li>
                                <li><Link to="/login">Logga in</Link></li>
                                <li><Link className="btn btn-primary" to="/logout">Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="main">
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/om" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}


export default App;
