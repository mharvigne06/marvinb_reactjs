import React, { Component } from "react";

class Button extends Component {
    render() {
        return (
            <button type="button" className={this.props.buttonClass} onClick={this.props.onClick} style={{ display: this.props.disp }} >
                <span className={this.props.icon} />
            </button>
        );
    }
}

export default Button;