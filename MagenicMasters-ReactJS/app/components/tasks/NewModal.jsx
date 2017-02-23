import React, { Component } from "react";
import ReactBootstrap, {Modal} from "react-bootstrap";

class NewModal extends Component {
    render() {
        return (
            <Modal show={this.props.showModal} >
                <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Task Name</td>
                                <td><input type="text" id="name" value={this.props.nameValue} onChange={this.props.handleFieldChange} /></td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td><input type="text" id="desc" value={this.props.descValue} onChange={this.props.handleFieldChange} /></td>
                            </tr>
                            <tr>
                                <td>Priority</td>
                                <td>
                                    <select value={this.props.priorityValue} id="priority" onChange={this.props.handleFieldChange}>
                                        <option>High</option>
                                        <option>Medium</option>
                                        <option>Low</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>
                                    <select value={this.props.statusValue} id="status" onChange={this.props.handleFieldChange}>
                                        <option>To Do</option>
                                        <option>Inprogress</option>
                                        <option>Done</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary btn-sm" onClick={this.props.save}>Save</button>
                    <button type="button" className="btn btn-primary btn-sm" onClick={this.props.close}>Close</button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default NewModal;