var React = require("react");

var TaskPanel = require("./TaskPanel.jsx");

var TaskMaster = React.createClass({
    render: function(){
        return(
            <div className="container">
                <TaskPanel/>
            </div>
        );
    }
});

module.exports = TaskMaster;
