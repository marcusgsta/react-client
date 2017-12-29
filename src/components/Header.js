import React from 'react';
import { Link } from 'react-router-dom';
import expressIcon from '../img/express_icon.png';
import Logout from './login/logout.js';
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
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
                <Logout />
                {/* <li><button className='btn' onClick={this.logout}>Logga ut</button></li> */}
            </ul>
        </div>
    </div>
);

export default Header;
