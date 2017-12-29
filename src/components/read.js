import React, {Component} from 'react';

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
                <h2>Användare</h2>
                {
                    this.state.users.map((data, i) => {
                        return <div className="user" key={i}>
                            {/* <span className="gravatar"> {data.gravatar}</span> */}
                            <div className="nick">{data.nick}</div></div>;
                    })
                }
            </div>
        );
    }
}
export default Read;
