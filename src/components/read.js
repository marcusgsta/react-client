import React, {Component} from 'react';

export class Read extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formulas: [],
            name: [],
            value: '',
            output: ''
        };
    }

    componentDidMount() {
        fetch('http://localhost:1337/api/read')
            .then(results => {
                if (results.ok) {
                    return results.json();
                }
                throw new Error("Network response was not ok.");
            }).then(data => {
                console.log(data);
                this.setState({formulas: data});
                console.log("state", data);
            }).catch(error => {
                console.log("There was a problem with your fetch operation: ", error.message);
            });
    }
    render() {
        return (
            <div>
                <h2>Läsa värden från databas</h2>
                <p>Detta är en demo av CRUD-operationer med hjälp av Mongodb.</p>
                <p>Här läses databasens innehåll:</p>
                {
                    this.state.formulas.map((data, i) => {
                        return <div className="formula" key={i}>
                            <h3 className="name">{data.name}</h3> <div className="formel">{data.formula}</div><span className="description"> {data.description}</span></div>;
                    })
                }
            </div>
        );
    }
}
export default Read;
