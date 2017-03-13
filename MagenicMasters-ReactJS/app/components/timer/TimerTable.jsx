import React, { Component } from "react";

import TimerItem from "./TimerItem.jsx";

class TimerTable extends Component {
    constructor(){
        super();
        this.renderItems = this.renderItems.bind(this);
    }

    renderItems(){
        return this.props.timers.map((timer) => {
            return(
                <TimerItem key={timer.id}
                    timerData={timer}
                    />
            );
        });
    }

    render() {
        
        return (
            <div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr className="info">
                            <th>Name</th>
                            <th>Duration (seconds)</th>
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

export default TimerTable;