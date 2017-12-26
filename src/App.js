import React from 'react';
// router
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
// components
import Home from './components/home.js';
import About from './components/about.js';
import Users from './components/users.js';
import { Chat } from './components/chat.js';
import Read from './components/read.js';
import Add from './components/add.js';
import Remove from './components/remove.js';
import Update from './components/update.js';
import Login from './components/login/login.js';
import Secret from './components/secret.js';
// images
import expressIcon from './img/express_icon.png';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: '',
            output: '',
            animate: '',
            timeout: null
        };
    }

    logout() {
        localStorage.clear();
        console.log("Logged out");
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <div className="site-header">
                        <div className="centeredmenu">
                            <img id="icon" alt="express icon" src={expressIcon} />
                            <ul className="site-navbar primary-nav">
                                <li><Link to="/">Hem</Link></li>
                                <li><Link to="/om">Om</Link></li>
                                <li><Link to="/users">Users</Link></li>
                                <li><Link to="/chat">Chat</Link></li>
                                <li><Link to="/read">Mongodb</Link>
                                    <ul>
                                        <li><Link to="/read">Read</Link></li>
                                        <li><Link to="/add">Add</Link></li>
                                        <li><Link to="/remove">Remove</Link></li>
                                        <li><Link to="/update">Update</Link></li>
                                    </ul></li>
                                <li><Link to="/login">Logga in</Link></li>
                                <li><button className='btn' onClick={this.logout}>Logga ut</button></li>
                            </ul>
                        </div>
                    </div>
                    {/* <hr/> */}
                    <div className="main">

                        <Route exact path="/" component={Home}/>
                        <Route path="/om" component={About}/>
                        <Route path="/users" component={Users}/>
                        <Route path="/chat" component={Chat}/>
                        <Route path="/read" component={Read}/>
                        <Route path="/add" component={Add}/>
                        <Route path="/remove" component={Remove}/>
                        <Route path="/update" component={Update}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/secret" component={Secret}/>
                    </div>
                    <div className="site-footer">
                        Copyright (c) by Marcus Gustafsson
                    </div>
                </div>
            </Router>
        );
    }
}


export default App;
