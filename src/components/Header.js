import React from 'react';
import { Link } from 'react-router-dom';
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <div className="site-header">
        <div className="centeredmenu">
            <ul className="site-navbar primary-nav">
                <li><Link to="/">Start</Link></li>
                <li><Link to="/om">Om</Link></li>
                <li><Link to="/add">Registrera dig</Link></li>
                {/* <li><Link to="/read">Mongodb</Link>
                    <ul>
                        <li><Link to="/read">Read</Link></li>
                        <li><Link to="/add">Add</Link></li>
                        <li><Link to="/remove">Remove</Link></li>
                        <li><Link to="/update">Update</Link></li>
                    </ul></li> */}
                <li><Link to="/login">Logga in</Link></li>
                <li><Link className="btn btn-primary" to="/logout">Logga ut</Link></li>
                <li><Link to="/admin">Admin</Link></li>
            </ul>
        </div>
    </div>
);

export default Header;
