import React, {Component} from 'react';
// import { requireAuth } from '../auth';
import PropTypes from 'prop-types';

export class Remove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            name: [],
            value: '',
            output: '',
            animate: '',
            id: '',
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
        if (this.state.id === '') {
            console.log("No user chosen!");
            this.setState({output: "Vänligen välj en användare."});
            this.setState({animate: "animateWarning"});
            this.resetMessages();
            return;
        }
        console.log('A user was submitted: ' + this.state.id);

        const myInit = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            cache: 'default',
            body: JSON.stringify({"id": this.state.id})
        };

        fetch('/api/remove', myInit)
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                throw new Error("Network response was not ok.");
            }).then(data => {
                this.setState({
                    formulas: this.state.users.filter(user => user._id !== this.state.id)
                });
                console.log("state", data);
                this.setState({output: "Användaren raderades!"});
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
            <div className="remove-page">
                <h2>Radera användare</h2>
                <form className="remove-form" onSubmit={this.handleSubmit}>
                    <select name="id" onChange={this.handleChange}>
                        <option value="null">Välj användare</option>
                        {
                            this.state.users.map((data, i) => {
                                return <option key={i} value={data._id}>{data.name}</option>;
                            })
                        }
                    </select>
                    <input className="button button--text button--primary" type="submit" value="Ta bort" />
                </form>
                <div className={"output " + this.state.animate}>{this.state.output}</div>
            </div>
        );
    }
}

Remove.propTypes = {
    history: PropTypes.object.isRequired
};

export default Remove;
