import React, {Component} from 'react';

export class Secret extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            name: [],
            value: '',
            output: '',
            token: localStorage.getItem('token') || ''
        };
    }

    componentDidMount() {
        const myInit = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this.state.token,
            },
            cache: 'default'
        };

        fetch('/api/secret', myInit)
            .then(results => {
                if (results.ok) {
                // if (results.token) {
                //     console.log('Yippie – Du har tillgång!');
                    return results.json();
                }
                throw new Error("Network response was not ok.");
            }).then(data => {
                console.log(data);
                // this.setState({users: data});
                console.log("state", data);
            }).catch(error => {
                console.log("There was a problem with your fetch operation: ", error.message);
            });
    }
    render() {
        return (
            <div>
                <h2>Hemlig route</h2>
                {/* {
                    this.state.users.map((data, i) => {
                        return <div className="user" key={i}>
                            <h3 className="name">{data.name}</h3> <div className="nick">{data.nick}</div><span className="gravatar"> {data.gravatar}</span></div>;
                    })
                } */}
            </div>
        );
    }
}
export default Secret;
