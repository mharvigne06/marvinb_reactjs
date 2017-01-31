var React = require("react");


var TaskItem = React.createClass({
    render: function(){
        return(
            <tr>
                <td>{this.props.taskId}</td>
                <td>{this.props.name}</td>
                <td>{this.props.description}</td>
                <td>{this.props.priority}</td>
                <td>{this.props.status}</td>
            </tr>             
        );
    }
});

module.exports = TaskItem;