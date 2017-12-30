import React from 'react';
import ReactDOM from 'react-dom';
import PrivateRoute from './PrivateRoute';
import {
    HashRouter as Router } from 'react-router-dom';
import { Home } from './home';
import Auth from '../auth';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Router>
            <PrivateRoute authed={Auth.authenticate()} exact path="/" component={Home} />
        </Router>, div
    );
});
