import React, { Component } from "react";
import "./Keyboard.css";

class Keyboard extends Component {
    render() {
        return (
            <div className="keyboardContainer">
                {this.getKeyboard()}
                <div className="keyboardRow">
                    <button className="specialKeyboardButton">SPACE</button>
                    <button className="specialKeyboardButton">DELETE</button>
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
                        <button className="keyboardButton">A</button>
                        <button className="keyboardButton">B</button>
                        <button className="keyboardButton">C</button>
                    </div>
                    <div className="keyboardRow">
                        <button className="keyboardButton">D</button>
                        <button className="keyboardButton">E</button>
                        <button className="keyboardButton">F</button>
                    </div>
                    <div className="keyboardRow">
                        <button className="keyboardButton">G</button>
                        <button className="keyboardButton">H</button>
                        <button className="keyboardButton">I</button>
                    </div>
                </>
            );
        } else if (selectedGroup === 1) {
            return (
                <>
                    <div className="keyboardRow">
                        <button className="keyboardButton">J</button>
                        <button className="keyboardButton">K</button>
                        <button className="keyboardButton">L</button>
                    </div>
                    <div className="keyboardRow">
                        <button className="keyboardButton">M</button>
                        <button className="keyboardButton">N</button>
                        <button className="keyboardButton">O</button>
                    </div>
                    <div className="keyboardRow">
                        <button className="keyboardButton">P</button>
                        <button className="keyboardButton">Q</button>
                        <button className="keyboardButton">R</button>
                    </div>
                </>
            );
        } else {
            /* selectedGroup === 2 */
            return (
                <>
                    <div className="keyboardRow">
                        <button className="keyboardButton">S</button>
                        <button className="keyboardButton">T</button>
                        <button className="keyboardButton">U</button>
                    </div>
                    <div className="keyboardRow">
                        <button className="keyboardButton">V</button>
                        <button className="keyboardButton">W</button>
                        <button className="keyboardButton">X</button>
                    </div>
                    <div className="keyboardRow">
                        <button className="keyboardButton">Y</button>
                        <button className="keyboardButton">Z</button>
                        <button className="keyboardButton" />
                    </div>
                </>
            );
        }
    }
}

export default Keyboard;
