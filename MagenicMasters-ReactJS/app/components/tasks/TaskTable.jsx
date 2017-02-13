var React = require("react");
var TaskItem = require("./TaskItem.jsx");

var TaskTable = React.createClass({
    renderItems: function () {
        return this.props.taskData.map(function (item) {
            return (
                <TaskItem
                    key={item.taskId}
                    taskItemData={item}
                    handleRowDelete={this.props.handleRowDelete}
                    />
            );
        }, this);
    },
    render: function () {
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
});

module.exports = TaskTable;