import React, {Component} from 'react';


export class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            value: '',
            output: '',
            animate: '',
            id: '',
            name: '',
            nick: '',
            email: '',
            timeout: ''
        };

        this.handleAlternate = this.handleAlternate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resetMessages() {
        if (this.state.timeout !== null) {
            clearTimeout(this.state.timeout);
        }
        setTimeout(() => {
            this.setState({
                animate: '',
                output: '',
                timeout: null
            });
        }, 3500);
    }

    handleAlternate(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleChange(event) {
        if (event.target.value !== 'null') {
            console.log(event.target.value);
            let users = this.state.users.filter(users => users._id === event.target.value);

            let name = users[0].name;
            let nickN = users[0].nick;
            let email = users[0].email;

            console.log(users[0]);
            this.setState({id: event.target.value});
            this.setState({name: name});
            this.setState({nick: nickN});
            this.setState({email: email});

            console.log("kolla", this.state.users);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.id === '') {
            console.log("No user chosen!");
            this.setState({output: "Vänligen välj en användare."});
            this.setState({animate: "animateWarning"});
            this.resetMessages();
            return;
        }
        if (this.state.name === '' || this.state.nick === '' || this.state.email === '') {
            console.log("One or more empty strings");
            this.setState({output: "Vänligen skriv in värden i alla fält!"});
            this.setState({animate: "animateWarning"});
            this.resetMessages();
            return;
        }
        console.log('A user was submitted: ' + this.state.id);
        console.log("id", this.state.id);
        console.log("name", this.state.name);
        console.log("nick", this.state.nick);
        console.log("email", this.state.email);

        const myInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            cache: 'default',
            body: JSON.stringify({"id": this.state.id, "name": this.state.name, "nick": this.state.nick, "email": this.state.email})
        };

        fetch('/api/update', myInit)
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                throw new Error("Network response was not ok.");
            }).then(data => {
                this.setState({
                    users: this.state.users
                });

                this.state.users.map((obj) => {
                    if (obj._id === this.state.id) {
                        obj.name = this.state.name;
                        obj.nick = this.state.nick;
                        obj.email = this.state.email;
                    }
                    return obj;
                });
                this.setState({users: this.state.users });
                this.setState({output: "Användaren uppdaterades!"});
                this.setState({animate: "animate"});
                console.log(data);
                this.resetMessages();
            }).catch(error => {
                console.log("There was a problem with your fetch operation: ", error.message);
            });
    }

    componentDidMount() {
        fetch('/api/read')
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                throw new Error("Network response was not ok.");
            }).then(data => {
                this.setState({users: data});
                console.log("state", data);
            }).catch(error => {
                console.log("There was a problem with your fetch operation: ", error.message);
            });
    }
    render() {
        return (
            <div className="update-page">
                <h2>Redigera användare</h2>
                <form className="update-form" onSubmit={this.handleSubmit}>
                    <select name="id" onChange={this.handleChange}>
                        <option value="null">Välj användare</option>
                        {
                            this.state.users.map((data, i) => {
                                return <option key={i} value={data._id}>{data.name}</option>;
                            })
                        }
                    </select>
                    <br />
                    <input name="name" onChange={this.handleAlternate} value={this.state.name} type="text" /><br />
                    <input name="nick" onChange={this.handleAlternate} value={this.state.nick} type="text" /><br />
                    <input name="email" onChange={this.handleAlternate} value={this.state.email} type="text" /><br />
                    <input type="submit" className="button button--text button--primary" value="Uppdatera" />
                </form>
                <div className={"output " + this.state.animate}>{this.state.output}</div>
            </div>
        );
    }
}
export default Update;
