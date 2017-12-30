import React from 'react';
import ReactDOM from 'react-dom';
import AdminRoute from './AdminRoute';
import {
    HashRouter as Router } from 'react-router-dom';
import { Home } from './home';
import Auth from '../auth';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Router>
            <AdminRoute authed={Auth.authenticateAdmin()} exact path="/" component={Home} />
        </Router>, div
    );
});
