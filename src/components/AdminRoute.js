import React from 'react';
import PropTypes from 'prop-types';
import {
    Route,
    Redirect
} from 'react-router-dom';
import Auth from '../auth';

const AdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        Auth.authenticateAdmin() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
);

AdminRoute.propTypes = {
    location: PropTypes.any,
    component: PropTypes.any
};

export default AdminRoute;
