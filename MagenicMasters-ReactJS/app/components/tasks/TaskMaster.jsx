import React, { Component } from "react";

import TaskPanel from "./TaskPanel.jsx";

class TaskMaster extends Component {
    render() {
        return (
            <div className="container">
                <TaskPanel />
            </div>
        );
    }
}

export default TaskMaster;
