import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calculators: 1
        }
    }

    updateCalculators = (event) => {
        this.setState({calculators: parseInt(event.target.value)});
    }

    render() {
        let calculators = [...Array(this.state.calculators)].map((_, i) => <Calculator />);
        return (
        <div className="App">
          <header className="App-header">
            <CalculatorSelect calculators={this.state.calculators} onChange={this.updateCalculators} />
            {calculators}
          </header>
        </div>
        );
    }
}

class CalculatorSelect extends React.Component {
    render() {
        return (
            <div>
                1<input max="5" min="1" onChange={this.props.onChange} type="range" value={this.props.calculators} />5
            </div>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lhs: "",
            rhs: ""
        }
    }

    onChange = event => {
        let value = parseInt(event.target.value) || "";
        this.setState({[event.target.name]: value});
    }

    render() {
        return (
            <div>
                <input placeholder="lhs" name="lhs" onChange={this.onChange} value={this.state.lhs}/>
                +
                <input placeholder="rhs" name="rhs" onChange={this.onChange} value={this.state.rhs}/>
                =
                <input placeholder="result" value={this.state.lhs + this.state.rhs} disabled />
            </div>
        )
    }
}

export default App;
