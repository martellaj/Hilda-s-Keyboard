import React, { Component } from "react";
import "./Switcher.css";

class Switcher extends Component {
    render() {
        const { selectedGroup } = this.props;

        return (
            <div className="switcherContainer">
                <button
                    className={`switcherButton ${
                        selectedGroup === 0
                            ? "selectedGroupButton"
                            : "groupButton"
                    }`}
                    onClick={() => this.switchGroup(0)}
                >
                    A - I
                </button>
                <button
                    className={`switcherButton ${
                        selectedGroup === 1
                            ? "selectedGroupButton"
                            : "groupButton"
                    }`}
                    onClick={() => this.switchGroup(1)}
                >
                    J - R
                </button>
                <button
                    className={`switcherButton ${
                        selectedGroup === 2
                            ? "selectedGroupButton"
                            : "groupButton"
                    }`}
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
