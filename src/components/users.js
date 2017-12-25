import React from 'react';

export class Users extends React.Component {
    state = {users: []}

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                <p>Test av hämtning av data från back-end.</p>
                <p>I detta exemplet används <code>fetch()</code> för att hämta JSON-data i form av två användare från back-end-routen <em>users</em>. Om det fungerar korrekt ska de visas här nedanför:</p>
                <ul className='users'>
                    {this.state.users.map(user =>
                        <li key={user.id}>{user.username}</li>
                    )}
                </ul>
            </div>
        );
    }
}
export default Users;
