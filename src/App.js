import React, { Component } from "react";
import "./App.css";
import Switcher from "./Switcher";
import Keyboard from "./Keyboard";

class App extends Component {
    constructor(props, state) {
        super(props, state);

        this.state = {
            selectedGroup: 0,
            text: ""
        };

        this.modifyText = this.modifyText.bind(this);
        this.switchGroup = this.switchGroup.bind(this);
    }

    render() {
        return (
            <div className="App">
                <div className="textDisplay">{this.state.text}</div>
                <button
                    className="clearButton"
                    onClick={() => this.setState({ text: "" })}
                >
                    CLEAR
                </button>
                <Switcher switchGroup={this.switchGroup} />
                <Keyboard
                    selectedGroup={this.state.selectedGroup}
                    modifyText={this.modifyText}
                />
            </div>
        );
    }

    switchGroup(group) {
        this.setState({
            selectedGroup: group
        });
    }

    modifyText(letter) {
        if (letter === "BACKSPACE") {
            this.setState({
                text: this.state.text.substring(0, this.state.text.length - 1)
            });
        } else {
            this.setState({
                text: this.state.text + letter
            });
        }
    }
}

export default App;
