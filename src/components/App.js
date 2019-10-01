import React, { Component } from "react";
// import "./App.css";
// import KeyPad from "./Components/KeyPad";
import KeyPad from "./key-pad-functional-comp";
import Output from "./Output";

class App extends Component {
    state = {
        result: ""
    };

    buttonPressed = buttonName => {
        if (buttonName === "=") {
            this.calculate();
        } else if (buttonName === 'C') {
            this.reset();
        } else if (buttonName === 'CE') {
            this.backspace();
        }
        else
            this.setState({
                result: this.state.result + buttonName
            });
    };
    reset = () => {
        this.setState({
            result: '',
        });
    }

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1),
        });
    }
    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.result) || "") + ""
            });
        } catch (e) {
            this.setState({ result: 'error' });

        }
    };
    render() {
        return (
            <div style={{ width: '400px', height: '1vr' }}>
                <div className='class-body'>
                    <Output result={this.state.result} />
                    <KeyPad buttonPressed={this.buttonPressed} blue />
                </div>
            </div>
        );
    }
}

export default App;