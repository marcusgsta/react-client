import React, {Component} from 'react';

export class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formula: '',
            name: '',
            value: '',
            description: '',
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
        if (this.state.name === '' || this.state.formula === '' || this.state.description === '') {
            console.log("name is empty string");
            this.setState({output: "Vänligen skriv in värden i alla fält!"});
            this.setState({animate: "animateWarning"});
            this.resetMessages();
            return;
        }
        console.log(typeof(this.state.name));
        console.log('A name was submitted: ' + this.state.name);
        console.log('A formula was submitted: ' + this.state.formula);
        console.log('A description was submitted: ' + this.state.description);


        const myInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            cache: 'default',
            body: JSON.stringify({"name": this.state.name, "formula": this.state.formula, "description": this.state.description})
        };

        fetch('http://localhost:1337/api/add', myInit)
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                throw new Error('Network response was not ok.');
            }).then(data => {
                this.setState({output: "Formeln lades till i databas!"});
                this.setState({animate: "animate"});
                console.log(data);
                console.log("state", data);
                this.resetMessages();
            }).catch(error => {
                console.log('There has been a problem with your fetch operation: ', error.message);
            });
    }

    render() {
        return (
            <div>
                <h2>Lägga till</h2>
                <p>Detta är en demo av CRUD-operationer med hjälp av Mongodb.</p>
                <p>Här kan du lägga till en formel till databasen:</p>
                <form className="db_form" onSubmit={this.handleSubmit}>
                    <div className="input">
                        <input name="name" placeholder="Namn" type="text" value={this.state.name} onChange={this.handleChange}/><br />
                        <input name="formula" placeholder="Formel" type="text" value={this.state.formula} onChange={this.handleChange}/><br />
                        <input name="description" placeholder="Beskrivning" type="text" value={this.state.description} onChange={this.handleChange}/><br />
                        <input className="button button--text button--primary" type="submit" value="Lägg till"/>
                    </div>
                </form>
                <div className={"output " + this.state.animate}>{this.state.output}</div>
            </div>
        );
    }
}
export default Add;
