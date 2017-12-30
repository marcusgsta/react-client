import React from 'react';
import PropTypes from 'prop-types';
import {
    Route,
    Redirect
} from 'react-router-dom';
import Auth from '../auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        Auth.authenticate() ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
);

PrivateRoute.propTypes = {
    location: PropTypes.any,
    component: PropTypes.any
};

export default PrivateRoute;
