import React, { Component } from "react";

class AddButton extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary btn-sm" onClick={this.props.onClick}>Add New</button>
            </div>
        );
    }
}

export default AddButton;