import React, { Component } from "react";

import TaskTable from "./TaskTable.jsx";
import AddButton from "./AddButton.jsx";
import NewModal from "./NewModal.jsx";
import ReactBootstrap from "react-bootstrap";
import _ from "lodash";


const data = [
    { taskId: 1, name: 'Hiking', description: 'Climb a mountain', priority: 'Medium', status: 'Inprogress' },
    { taskId: 2, name: 'Swimming', description: 'Swim in the beach', priority: 'Medium', status: 'Todo' },
    { taskId: 3, name: 'Running', description: 'Run a marathon', priority: 'Medium', status: 'Done' }
];

localStorage.setItem("data", JSON.stringify(data));
let retrievedData = localStorage.getItem("data")

class TaskPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: JSON.parse(retrievedData),
            showModal: false,
            name: "",
            desc: "",
            priority: "High",
            status: "To Do"
        };
         this.handleFieldChange = this.handleFieldChange.bind(this);
         this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleModalSave = this.handleModalSave.bind(this);
        this.generateId = this.generateId.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    handleFieldChange(event) {
        let fieldName = event.target.id
        let value = event.target.value;

        if (fieldName == "name") { this.setState({ name: value }); }
        if (fieldName == "desc") { this.setState({ desc: value }); }
        if (fieldName == "priority") { this.setState({ priority: value }); }
        if (fieldName == "status") { this.setState({ status: value }); }
    }
    handleModalOpen() {
        this.setState({ showModal: true });
    }
    handleModalClose() {
        this.setState({
            name: "",
            desc: "",
            priority: "High",
            status: "To Do"
        });
        this.setState({ showModal: false });
    }
    handleModalSave() {
        let itemArray = this.state.items;
        itemArray.push({ taskId: this.generateId(), name: this.state.name, description: this.state.desc, priority: this.state.priority, status: this.state.status });
        this.setState({ items: itemArray });
        this.handleModalClose();
    }
    generateId() {
        let max = _.maxBy(this.state.items, function (d) {
            return d.taskId;
        });

        return max.taskId + 1;
    }
    deleteItem(item) {
        let itemArray = this.state.items.filter(function (itm) {
            return item.taskId !== itm.taskId;
        });

        this.setState({ items: itemArray });
    }
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">Task Master List</div>
                <div className="panel-body">
                    <TaskTable taskData={this.state.items}
                        handleRowDelete={this.deleteItem}
                        />
                </div>
                <div style={{ padding: 20 }}>
                    <AddButton onClick={this.handleModalOpen} />
                    <NewModal showModal={this.state.showModal}
                        close={this.handleModalClose}
                        save={this.handleModalSave}
                        handleFieldChange={this.handleFieldChange}
                        nameValue={this.state.name}
                        descValue={this.state.desc}
                        priorityValue={this.state.priority}
                        statusValue={this.state.status} />
                </div>
            </div>
        );
    }
}

export default TaskPanel;