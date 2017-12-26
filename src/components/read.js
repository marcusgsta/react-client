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
            <div>
                <h2>Alla användare i databasen</h2>
                {
                    this.state.users.map((data, i) => {
                        return <div className="user" key={i}>
                            <h3 className="name">{data.name}</h3> <div className="nick">{data.nick}</div><span className="gravatar"> {data.gravatar}</span></div>;
                    })
                }
            </div>
        );
    }
}
export default Read;
