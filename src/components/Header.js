import React from 'react';
import { Link } from 'react-router-dom';
const FontAwesome = require('react-fontawesome');
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <div className="site-header">
        <div className="header-title">
            <span>React Chat</span>
        </div>
        <div className="centeredmenu">
            <ul className="site-navbar primary-nav">
                <li><Link to="/">
                    <FontAwesome
                        className="fas fa-home fa-fw"
                        name="home"
                        size="lg"
                        style={{color: '#a9c8ff'}}>
                    </FontAwesome> Start</Link>
                </li>
                <li><Link to="/om">
                    <FontAwesome
                        name="info"
                        className="fas fa-info fa-fw"
                        size="lg"
                        style={{color: '#ffbf70'}}>
                    </FontAwesome> Info</Link>
                </li>
                <li><Link to="/add">
                    <FontAwesome
                        name="add"
                        className="fas fa-user-plus"
                        size="lg"
                        style={{color: '#30f02c'}}>
                    </FontAwesome> Registrera dig</Link>
                </li>
                <li><Link to="/login">
                    <FontAwesome
                        name="sign-in"
                        className="fas fa-sign-in"
                        size="lg"
                        style={{color: '#30f02c'}}>
                    </FontAwesome> Logga in</Link>
                </li>
                <li><Link to="/logout">
                    <FontAwesome
                        name="sign-out"
                        className="fas fa-sign-out"
                        size="lg"
                        style={{color: '#8a363e'}}>
                    </FontAwesome> Logga ut</Link>
                </li>
                <li><Link to="/admin">
                    <FontAwesome
                        name="admin"
                        className="fas fa-cogs"
                        size="lg"
                        style={{color: '#6f4d39'}}>
                    </FontAwesome> Admin</Link>
                </li>
            </ul>
        </div>
    </div>
);

export default Header;
