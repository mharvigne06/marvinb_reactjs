import React, { Component } from "react";

class AddButton extends Component {
    render() {
        return (
            <div>
                <button type="button" className={this.props._className} onClick={this.props.onClick}>{this.props.title}</button>
            </div>
        );
    }
}

export default AddButton;