import React, {Component} from 'react';

export class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nick: '',
            email: '',
            password: '',
            value: '',
            description: '',
            output: '',
            animate: '',
            timeout: null,
            nickExists: 'no'
        };

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

    setNickExists(value) {
        this.setState({nickExists: value});
    }

    fetchNick(nick) {
        let that = this;

        fetch('/api/find/' + nick)
            // .then(response => response.json())
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            }).then(data => {
                if (data.length === 0) {
                    // this.setNickExists('yes');
                    // this.setState({nickExists: 'yes'});
                    that.addUser(this.state.name, that.state.nick, this.state.email, that.state.password);
                } else {
                    that.addErrorMessage();
                }
            });
    }

    addUser(name, nick, email, password) {
        console.log("in function: ", this.state.nickExists);
        const myInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            cache: 'default',
            body: JSON.stringify({"name": name, "nick": nick, "email": email, "password": password})
        };

        fetch('/api/add', myInit)
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                console.log(results.json());
                throw new Error('Network response was not ok.');
            }).then(data => {
                this.addSuccessMessage(data);
            }).catch(error => {
                console.log('There has been a problem with your fetch operation: ', error.message);
            });
    }

    addSuccessMessage(data) {
        this.setState({output: "Användare lades till i databas!"});
        this.setState({animate: "animate"});
        console.log(data);
        // console.log("state", data);
        this.resetMessages();
    }

    addErrorMessage() {
        this.setState({output: "Nick existerar redan!"});
        this.setState({animate: "animateWarning"});
        // console.log("state", data);
        this.resetMessages();
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.name === '' || this.state.nick === '' || this.state.email === '' || this.state.password === '') {
            console.log("found empty string");
            this.setState({output: "Vänligen skriv in värden i alla fält!"});
            this.setState({animate: "animateWarning"});
            this.resetMessages();
            return;
        }
        console.log(typeof(this.state.name));
        console.log('A name was submitted: ' + this.state.name);
        console.log('A nickname was submitted: ' + this.state.nick);
        console.log('An email was submitted: ' + this.state.email);

        // let fetchData = this.fetchNick(this.state.nick);
        this.fetchNick(this.state.nick);
    }

    render() {
        return (
            <div className="add-page">
                <h2>Registrera ny användare</h2>
                <form className="db_form add-form" onSubmit={this.handleSubmit}>
                    <div className="input">
                        <input name="name" placeholder="Namn" type="text" value={this.state.name} onChange={this.handleChange}/><br />
                        <input name="nick" placeholder="Nick" type="text" value={this.state.nick} onChange={this.handleChange}/><br />
                        <input name="email" placeholder="Email" type="text" value={this.state.email} onChange={this.handleChange}/><br />
                        <input name="password" placeholder="Lösenord" type="password" value={this.state.password} onChange={this.handleChange}/><br />
                        <input className="button button--text button--primary" type="submit" value="Lägg till"/>
                    </div>
                </form>
                <div className={"output " + this.state.animate}>{this.state.output}</div>
            </div>
        );
    }
}
export default Add;
