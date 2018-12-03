import React, { Component } from "react";
import "./Keyboard.css";

class Keyboard extends Component {
    render() {
        return (
            <div className="keyboardContainer">
                {this.getKeyboard()}
                <div className="keyboardRow">
                    <button
                        className="specialKeyboardButton"
                        onClick={() => {
                            this.props.modifyText(" ");
                        }}
                    >
                        SPACE
                    </button>
                    <button
                        className="specialKeyboardButton"
                        onClick={() => {
                            this.props.modifyText("BACKSPACE");
                        }}
                    >
                        BACKSPACE
                    </button>
                </div>
            </div>
        );
    }

    getKeyboard() {
        const { selectedGroup } = this.props;

        if (selectedGroup === 0) {
            return (
                <>
                    <div className="keyboardRow">
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("a");
                            }}
                        >
                            A
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("b");
                            }}
                        >
                            B
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("c");
                            }}
                        >
                            C
                        </button>
                    </div>
                    <div className="keyboardRow">
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("d");
                            }}
                        >
                            D
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("e");
                            }}
                        >
                            E
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("f");
                            }}
                        >
                            F
                        </button>
                    </div>
                    <div className="keyboardRow">
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("g");
                            }}
                        >
                            G
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("h");
                            }}
                        >
                            H
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("i");
                            }}
                        >
                            I
                        </button>
                    </div>
                </>
            );
        } else if (selectedGroup === 1) {
            return (
                <>
                    <div className="keyboardRow">
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("j");
                            }}
                        >
                            J
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("k");
                            }}
                        >
                            K
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("l");
                            }}
                        >
                            L
                        </button>
                    </div>
                    <div className="keyboardRow">
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("m");
                            }}
                        >
                            M
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("n");
                            }}
                        >
                            N
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("o");
                            }}
                        >
                            O
                        </button>
                    </div>
                    <div className="keyboardRow">
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("p");
                            }}
                        >
                            P
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("q");
                            }}
                        >
                            Q
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("r");
                            }}
                        >
                            R
                        </button>
                    </div>
                </>
            );
        } else {
            /* selectedGroup === 2 */
            return (
                <>
                    <div className="keyboardRow">
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("s");
                            }}
                        >
                            S
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("t");
                            }}
                        >
                            T
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("u");
                            }}
                        >
                            U
                        </button>
                    </div>
                    <div className="keyboardRow">
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("v");
                            }}
                        >
                            V
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("w");
                            }}
                        >
                            W
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("x");
                            }}
                        >
                            X
                        </button>
                    </div>
                    <div className="keyboardRow">
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("y");
                            }}
                        >
                            Y
                        </button>
                        <button
                            className="keyboardButton"
                            onClick={() => {
                                this.props.modifyText("z");
                            }}
                        >
                            Z
                        </button>
                        <button className="keyboardButton" />
                    </div>
                </>
            );
        }
    }
}

export default Keyboard;
