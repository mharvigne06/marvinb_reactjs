var React = require("react");

var TaskMaster = require("./TaskMaster.jsx");

var Tasks = React.createClass({
    render: function(){
        return(
            <div>
                <TaskMaster/>
            </div>
        );
    }
});

module.exports = Tasks;