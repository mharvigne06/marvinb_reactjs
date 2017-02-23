import React, { Component } from "react";
import ReactBootstrap, { Row, Col } from "react-bootstrap";
import _ from "lodash";

import TaskTable from "./TaskTable.jsx";
import AddButton from "./AddButton.jsx";
import NewModal from "./NewModal.jsx";

import TaskStore from "../../stores/taskStore";
import * as TasksActions from "../../actions/taskActions";

// const data = [
//     { taskId: 1, name: 'Hiking', description: 'Climb a mountain', priority: 'Medium', status: 'Inprogress' },
//     { taskId: 2, name: 'Swimming', description: 'Swim in the beach', priority: 'Medium', status: 'Todo' },
//     { taskId: 3, name: 'Running', description: 'Run a marathon', priority: 'Medium', status: 'Done' }
// ];

//localStorage.setItem("data", JSON.stringify(data));
//let retrievedData = localStorage.getItem("data")

class TaskPanel extends Component {
    constructor() {
        super();
        this.state = {
            tasks: TaskStore.getTasks(),
            name: "",
            desc: "",
            priority: "High",
            status: "To Do",
            showModal: false,
            showModal1: false
        };

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleModalSave = this.handleModalSave.bind(this);
        this.generateId = this.generateId.bind(this);
        this.handleModalOpen1 = this.handleModalOpen1.bind(this);
        this.handleModalClose1 = this.handleModalClose1.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

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
    handleModalOpen() {
        this.setState({ showModal: true });
    }
    handleModalOpen1() {
        this.setState({ showModal1: true });
    }
    handleModalClose1() {
        this.setState({
            name: "",
            desc: "",
            priority: "High",
            status: "To Do",
            showModal1: false
        });
    }
    handleModalClose() {
        this.setState({
            name: "",
            desc: "",
            priority: "High",
            status: "To Do",
            showModal: false
        });
    }
    handleModalSave() {
        TasksActions.addTask(this.generateId(), this.state.name, this.state.desc, this.state.priority, this.state.status);
        this.handleModalClose();
        this.handleModalClose1();
    }
    generateId() {
        let max = _.maxBy(TaskStore.getTasks(), function (d) {
            return d.taskId;
        });
        return max.taskId + 1;
    }
    handleDelete(id) {
        TasksActions.deleteTask(id);
        this.setState({ tasks: TaskStore.getTasks() });
    }
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">Task Master List</div>
                <div className="panel-body">
                    <TaskTable taskData={this.state.tasks}
                        handleDelete={this.handleDelete} />
                </div>
                <div style={{ padding: 20 }} className="container">
                    <Row>
                        <Col sm={1}>
                            <AddButton title="Add New" onClick={this.handleModalOpen} _className="btn btn-primary btn-sm" />
                        </Col >
                        <Col sm={4} >
                            <AddButton title="Add Priority Task" onClick={this.handleModalOpen1} _className="btn btn-warning btn-sm" />
                        </Col>
                    </Row>
                </div>
                <NewModal title="Add New Task" showModal={this.state.showModal}
                    close={this.handleModalClose}
                    save={this.handleModalSave}
                    handleFieldChange={this.handleFieldChange}
                    nameValue={this.state.name}
                    descValue={this.state.desc}
                    priorityValue={this.state.priority}
                    statusValue={this.state.status} />

                <NewModal title="Add Priority Task" showModal={this.state.showModal1}
                    close={this.handleModalClose1}
                    save={this.handleModalSave}
                    handleFieldChange={this.handleFieldChange}
                    nameValue={this.state.name}
                    descValue={this.state.desc}
                    priorityValue={this.state.priority}
                    statusValue={this.state.status} />
                
            </div>
            
        );
    }
}

export default TaskPanel;