import React, { Component } from "react";
import "./Switcher.css";

class Switcher extends Component {
    render() {
        return (
            <div className="switcherContainer">
                <button
                    className="switcherButton"
                    onClick={() => this.switchGroup(0)}
                >
                    A - I
                </button>
                <button
                    className="switcherButton"
                    onClick={() => this.switchGroup(1)}
                >
                    J - R
                </button>
                <button
                    className="switcherButton"
                    onClick={() => this.switchGroup(2)}
                >
                    S - Z
                </button>
            </div>
        );
    }

    switchGroup(group) {
        this.props.switchGroup(group);
    }
}

export default Switcher;
