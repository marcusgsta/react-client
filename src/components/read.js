import React, {Component} from 'react';
// import Auth from 'auth';

export class Read extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            name: [],
            value: '',
            output: ''
        };
    }

    componentDidMount() {
        fetch('/api/read')
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                throw new Error("Network response was not ok.");
            }).then(data => {
                console.log(data);
                this.setState({users: data});
                console.log("state", data);
            }).catch(error => {
                console.log("There was a problem with your fetch operation: ", error.message);
            });
    }
    render() {
        return (
            <div className="users">
                {
                    this.state.users.map((user, i) => {
                        return <div className="user" key={i}>
                            <a href="#" className="has-tooltip">
                                <img src={user.gravatar + '?d=robohash'} alt={user.nick} />
                                <span className="tooltip tooltip-with-border" role="tooltip"><span className="user-tip">{user.name}</span><br/>{user.nick}<br/>{user.email}</span>
                            </a>
                        </div>;
                    })
                }
            </div>
        );
    }
}
export default Read;
