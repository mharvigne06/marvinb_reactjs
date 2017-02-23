import React, { Component } from "react";
import ReactBootstrap, { Nav, NavItem, Popover, OverlayTrigger, ListGroup, ListGroupItem, Form, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import _ from "lodash";
import NewModal from "../tasks/NewModal.jsx";
import Button from "../tasks/AddButton.jsx";
import FieldGroup from "./FieldGroup.jsx";

import PriorityTaskStore from "../../stores/priorityTaskStore";
import TaskStore from "../../stores/taskStore";
import * as TasksActions from "../../actions/taskActions";

class PriorityTaskListPopover extends Component {
    constructor() {
        super();
        this.state = {
            tasks: []
        }
        this.setPriorityTasks = this.setPriorityTasks.bind(this);
    }
    componentWillMount() {
        this.setPriorityTasks();
        PriorityTaskStore.on('change', this.setPriorityTasks);
    }
    setPriorityTasks() {
        this.setState({ tasks: PriorityTaskStore.getPriorityTasks() });
    }
    render() {
        const popoverHoverFocus = (
            <Popover id="popover-trigger-hover-focus" title="High Priority Tasks:">
                <ListGroup>
                    {this.state.tasks.map((task) => {
                        return (
                            <ListGroupItem key={task.taskId}>
                                <strong>{task.name}</strong>
                                <br />
                                <small>{task.description}</small>
                            </ListGroupItem>
                        );
                    })}
                </ListGroup>
            </Popover>
        );
        return (
            <div>
                <Nav className="nav navbar-nav" pullRight>
                    <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popoverHoverFocus}>
                        <NavItem eventKey="1">Priority Tasks List</NavItem>
                    </OverlayTrigger>
                </Nav>
            </div>
        );
    }
}


export default PriorityTaskListPopover;