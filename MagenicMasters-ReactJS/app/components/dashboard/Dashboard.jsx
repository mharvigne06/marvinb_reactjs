import React, { Component } from "react";

import Timer from "../timer/Timer.jsx";
import Tasks from "../tasks/Tasks.jsx";

class Dashboard extends Component{
    render() {
        return (
            <div>
                <div><Timer/></div>
                <div><Tasks/></div>
            </div>
        );
    }
}

export default Dashboard;