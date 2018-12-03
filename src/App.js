import React, { Component } from "react";
import "./App.css";
import Switcher from "./Switcher";
import Keyboard from "./Keyboard";

class App extends Component {
    constructor(props, state) {
        super(props, state);

        this.state = {
            selectedGroup: 0
        };

        this.switchGroup = this.switchGroup.bind(this);
    }

    render() {
        return (
            <div className="App">
                <div className="textDisplay" />
                <Switcher switchGroup={this.switchGroup} />
                <Keyboard selectedGroup={this.state.selectedGroup} />
            </div>
        );
    }

    switchGroup(group) {
        this.setState({
            selectedGroup: group
        });
    }
}

export default App;
