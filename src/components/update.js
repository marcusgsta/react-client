import React, {Component} from 'react';

export class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formulas: [],
            value: '',
            output: '',
            animate: '',
            id: '',
            name: '',
            formula: '',
            description: '',
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
            let formula = this.state.formulas.filter(formula => formula._id === event.target.value);

            let name = formula[0].name;
            let formulaF = formula[0].formula;
            let description = formula[0].description;

            console.log(formula[0]);
            this.setState({id: event.target.value});
            this.setState({name: name});
            this.setState({formula: formulaF});
            this.setState({description: description});

            console.log("kolla", this.state.formulas);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.id === '') {
            console.log("No formula chosen!");
            this.setState({output: "Vänligen välj en formel i tabellen först."});
            this.setState({animate: "animateWarning"});
            this.resetMessages();
            return;
        }
        if (this.state.name === '' || this.state.formula === '' || this.state.description === '') {
            console.log("One or more empty strings");
            this.setState({output: "Vänligen skriv in värden i alla fält!"});
            this.setState({animate: "animateWarning"});
            this.resetMessages();
            return;
        }
        console.log('A formula was submitted: ' + this.state.id);
        console.log("id", this.state.id);
        console.log("name", this.state.name);
        console.log("formula", this.state.formula);
        console.log("description", this.state.description);

        const myInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            cache: 'default',
            body: JSON.stringify({"id": this.state.id, "name": this.state.name, "formula": this.state.formula, "description": this.state.description})
        };

        fetch('http://localhost:1337/api/update', myInit)
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                throw new Error("Network response was not ok.");
            }).then(data => {
                this.setState({
                    formulas: this.state.formulas
                });

                this.state.formulas.map((obj) => {
                    if (obj._id === this.state.id) {
                        obj.name = this.state.name;
                        obj.formula = this.state.formula;
                        obj.description = this.state.description;
                    }
                    return obj;
                });
                this.setState({formulas: this.state.formulas });
                this.setState({output: "Formeln uppdaterades!"});
                this.setState({animate: "animate"});
                console.log(data);
                this.resetMessages();
            }).catch(error => {
                console.log("There was a problem with your fetch operation: ", error.message);
            });
    }

    componentDidMount() {
        fetch('http://localhost:1337/api/read')
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                throw new Error("Network response was not ok.");
            }).then(data => {
                this.setState({formulas: data});
                console.log("state", data);
            }).catch(error => {
                console.log("There was a problem with your fetch operation: ", error.message);
            });
    }
    render() {
        return (
            <div>
                <h2>Crud</h2>
                <p>Detta är en demo av CRUD-operationer med hjälp av Mongodb.</p>
                <p>Här kan du uppdatera databasens innehåll:</p>
                <form onSubmit={this.handleSubmit}>
                    <select name="id" onChange={this.handleChange}>
                        <option value="null">Välj formel</option>
                        {
                            this.state.formulas.map((data, i) => {
                                return <option key={i} value={data._id}>{data.name}</option>;
                            })
                        }
                    </select>
                    <br />
                    <input name="name" onChange={this.handleAlternate} value={this.state.name} type="text" /><br />
                    <input name="formula" onChange={this.handleAlternate} value={this.state.formula} type="text" /><br />
                    <input name="description" onChange={this.handleAlternate} value={this.state.description} type="text" /><br />
                    <input type="submit" className="button button--text button--primary" value="Uppdatera" />
                </form>
                <div className={"output " + this.state.animate}>{this.state.output}</div>
            </div>
        );
    }
}
export default Update;
