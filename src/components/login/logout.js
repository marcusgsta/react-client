import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auth from '../../auth';

class Logout extends Component {
    componentDidMount() {
        Auth.deleteToken();
        if (this.props.history) {
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <h1 className="loading-text">
                Logging out...
            </h1>
        );
    }
}

Logout.propTypes = {
    history: PropTypes.object.isRequired
};

export default Logout;
