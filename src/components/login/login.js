import React, {Component} from 'react';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nick: '',
            password: '',
            value: '',
            output: '',
            animate: '',
            timeout: null
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

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.nick === '' || this.state.password === '') {
            console.log("found empty string");
            this.setState({output: "Vänligen skriv in värden i alla fält!"});
            this.setState({animate: "animateWarning"});
            this.resetMessages();
            return;
        }
        console.log('A nickname was submitted: ' + this.state.nick);
        console.log('A password was submitted: ' + this.state.password);

        const myInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            cache: 'default',
            body: JSON.stringify({"nick": this.state.nick, "password": this.state.password})
        };

        fetch('/api/login', myInit)
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                throw new Error('Network response was not ok.');
            }).then(data => {
                console.log(data.length !== 0);
                if (data.length !== 0) {
                    if (data.token) {
                        console.log(data.token);
                        // this.setState({"token": data.token});
                        localStorage.setItem('token', data.token);
                        this.setState({output: "Användare loggades in!"});
                        this.setState({animate: "animate"});
                        console.log(data);
                        console.log("state", data);
                        this.resetMessages();
                        return;
                    }
                }
                this.setState({output: "Inloggning misslyckades!"});
                this.setState({animate: "animateWarning"});
                this.resetMessages();
                return;
            }).catch(error => {
                console.log('There has been a problem with your fetch operation: ', error.message);
            });
    }

    render() {
        return (
            <div>
                <h2>Logga in</h2>
                <form className="db_form" onSubmit={this.handleSubmit}>
                    <div className="input">
                        <input name="nick" placeholder="Nick" type="text" value={this.state.nick} onChange={this.handleChange}/><br />
                        <input name="password" placeholder="Lösenord" type="password" value={this.state.password} onChange={this.handleChange}/><br />
                        <input className="button button--text button--primary" type="submit" value="Logga in"/>
                    </div>
                </form>
                <div className={"output " + this.state.animate}>{this.state.output}</div>
            </div>
        );
    }
}
export default Login;