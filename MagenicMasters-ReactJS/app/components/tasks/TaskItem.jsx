import React, { Component } from "react";

import Button from "./Button.jsx";

import * as TasksActions from "../../actions/taskActions";

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editControlsVisible: "none",
            viewControlsVisible: "inline",
            name: this.props.taskItemData.name,
            desc: this.props.taskItemData.description,
            priority: this.props.taskItemData.priority,
            status: this.props.taskItemData.status
        };
        this.handleRowEdit = this.handleRowEdit.bind(this);
        this.handleRowSave = this.handleRowSave.bind(this);
        this.handleRowCancel = this.handleRowCancel.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleRowDelete = this.handleRowDelete.bind(this);
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
        TasksActions.editTask(this.props.taskItemData.taskId, this.state.name, this.state.desc, this.state.priority, this.state.status);
    }
    handleRowDelete() {
        this.props.handleDelete(this.props.taskItemData.taskId);
    }
    handleRowCancel() {
        this.setState({
            editControlsVisible: "none",
            viewControlsVisible: "inline",
            name: this.props.taskItemData.name,
            desc: this.props.taskItemData.description,
            priority: this.props.taskItemData.priority,
            status: this.props.taskItemData.status
        });
    }
    handleFieldChange(event) {
        let fieldName = event.target.id
        let value = event.target.value;

        switch (fieldName) {
            case "name":
                this.setState({ name: value });
                break;
            case "desc":
                this.setState({ desc: value });
                break;
            case "priority":
                this.setState({ priority: value });
                break;
            case "status":
                this.setState({ status: value });
                break;
        }
    }
    render() {
        return (
            <tr>
                <td>
                    <div style={{ display: this.state.viewControlsVisible }}>
                        <h5>{this.props.taskItemData.name}
                            <div>
                                <small>{this.props.taskItemData.description}</small>
                            </div>
                        </h5>
                    </div>
                    <div style={{ display: this.state.editControlsVisible }}>
                        <input type="text" id="name" onChange={this.handleFieldChange} value={this.state.name} /><br />
                        <input type="text" id="desc" onChange={this.handleFieldChange} value={this.state.desc} />
                    </div>
                </td>
                <td>
                    <div style={{ display: this.state.viewControlsVisible }}>
                        {this.props.taskItemData.priority}
                    </div>
                    <div style={{ display: this.state.editControlsVisible }}>
                        <select id="priority" onChange={this.handleFieldChange} value={this.state.priority}>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </select>
                    </div>
                </td>
                <td>
                    <div style={{ display: this.state.viewControlsVisible }}>
                        {this.props.taskItemData.status}
                    </div>
                    <div style={{ display: this.state.editControlsVisible }}>
                        <select id="status" onChange={this.handleFieldChange} value={this.state.status}>
                            <option>To Do</option>
                            <option>Inprogress</option>
                            <option>Done</option>
                        </select>
                    </div>
                </td>
                <td>
                    <div>
                        <Button buttonClass="btn btn-primary btn-sm"
                            icon="glyphicon glyphicon-pencil"
                            disp={this.state.viewControlsVisible}
                            onClick={this.handleRowEdit}
                            />
                        <Button buttonClass="btn btn-danger btn-sm"
                            icon="glyphicon glyphicon-trash"
                            disp={this.state.viewControlsVisible}
                            onClick={this.handleRowDelete}
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


export default TaskItem;
