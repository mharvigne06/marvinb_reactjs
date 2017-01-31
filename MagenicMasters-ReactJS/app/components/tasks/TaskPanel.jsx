var React = require("react");
var TaskTable = require("./TaskTable.jsx");

var data = [
    { taskId: 1, name: 'Hiking', description: 'Climb a mountain', priority: 1, status: 'Inprogress' },
    { taskId: 2, name: 'Swimming', description: 'Swim in the beach', priority: 2, status: 'Todo' },
    { taskId: 3, name: 'Running', description: 'Run a marathon', priority: 3, status: 'Done' }
];

localStorage.setItem("data", JSON.stringify(data));
var retrievedData = localStorage.getItem("data")

var TaskPanel = React.createClass({
    render: function(){
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">Task Master List</div>
                    <div className="panel-body">
                        <TaskTable taskData={JSON.parse(retrievedData)}/>
                    </div>
            </div>
        );
    }
});

module.exports = TaskPanel;