import React, { Component } from "react";

import TaskItem from "./TaskItem.jsx";

class TaskTable extends Component {
    renderItems() {
        return this.props.taskData.map(function (item) {
            return (
                <TaskItem
                    key={item.taskId}
                    taskItemData={item}
                    handleDelete={this.props.handleDelete}
                    />
            );
        }, this);
    }
    render() {
        return (
            <div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr className="info">
                            <th>Task Details</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderItems()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TaskTable;