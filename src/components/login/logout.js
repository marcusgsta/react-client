import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
import { deleteToken } from '../../auth';
// import { logout } from '../../functions';

class Logout extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        deleteToken();
        console.log(this.props.history.push('/'));
        // console.log(this.props.router.push('/'));
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
    // router: PropTypes.object.isRequired
};

// const Logout = () => {
//     this.props.history.replace('/login');
//     return (
//         <button onClick={logout}>Logout</button>
//     );
// };
// export default withRouter(Logout);
export default Logout;
