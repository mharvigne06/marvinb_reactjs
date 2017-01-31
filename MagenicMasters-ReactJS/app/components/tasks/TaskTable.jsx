var React = require("react");

var TaskItem = require("./TaskItem.jsx");



var TaskTable = React.createClass({
    renderItems: function(){
        return this.props.taskData.map(function(item){
            return (
                <TaskItem 
                key={item.taskId} 
                taskId={item.taskId}
                name={item.name} 
                description={item.description}
                priority={item.priority}
                status={item.status} />
            );
        }, this);
    },
    render: function(){
        return(
            <div>
                <table className="table table-bordered">
                        <thead>
                            <tr className="info">
                                <th>Task ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Priority</th>
                                <th>Status</th>
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