import React, { Component } from "react";

import Button from "../tasks/Button.jsx";

import * as TasksActions from "../../actions/taskActions";

class TimerItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.timerData.name,
            time: this.props.timerData.time,
            editControlsVisible: "none",
            viewControlsVisible: "inline"
        }
        
        this.handleRowEdit = this.handleRowEdit.bind(this);
        this.handleRowSave = this.handleRowSave.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleRowCancel = this.handleRowCancel.bind(this);
        
    }
    handleRowEdit() {
        this.setState({
            editControlsVisible: "inline",
            viewControlsVisible: "none"
        });
    }
    handleRowSave() {
        this.setState({
            editControlsVisible: "none",
            viewControlsVisible: "inline"
        });
        TasksActions.editTimer(this.props.timerData.id, this.state.name, this.state.time);
    }
    handleRowCancel() {
        this.setState({
            editControlsVisible: "none",
            viewControlsVisible: "inline",
             name: this.props.timerData.name,
             time: this.props.timerData.time
        });
    }
    handleFieldChange(event) {
        let fieldName = event.target.id
        let value = event.target.value;

        switch (fieldName) {
            case "name":
                this.setState({ name: value });
                break;
            case "time":
                this.setState({ time: value });
                break;
        }
    }
    render(){
        return(
            <tr>
                <td>
                    <div style={{ display: this.state.viewControlsVisible }} >
                        {this.props.timerData.name}
                    </div>
                    <div style={{ display: this.state.editControlsVisible }}>
                        <input type="text" id="name" onChange={this.handleFieldChange} value={this.state.name} />
                    </div>
                </td>
                <td>
                    <div style={{ display: this.state.viewControlsVisible }} >
                        {this.props.timerData.time}
                    </div>
                    <div style={{ display: this.state.editControlsVisible }}>
                        <input type="text" id="time" onChange={this.handleFieldChange} value={this.state.time} />
                    </div>
                </td>
                <td>
                    <div>
                        <Button buttonClass="btn btn-primary btn-sm"
                            icon="glyphicon glyphicon-pencil"
                            disp={this.state.viewControlsVisible}
                            onClick={this.handleRowEdit}
                            />
                        <Button buttonClass="btn btn-success btn-sm"
                            icon="glyphicon glyphicon-floppy-disk"
                            disp={this.state.editControlsVisible}
                            onClick={this.handleRowSave}
                            />
                        <Button buttonClass="btn btn-danger btn-sm"
                            icon="glyphicon glyphicon-remove"
                            disp={this.state.editControlsVisible}
                            onClick={this.handleRowCancel}
                            />
                    </div>
                </td>
            </tr>
        );
    }
}

export default TimerItem;