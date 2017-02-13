var React = require("react");

var AddButton = React.createClass({
    render: function(){
        return(
            <div>
             <button type="button"  className="btn btn-primary btn-sm" onClick={this.props.onClick}>Add New</button>
            </div>
        );
    }
});

module.exports = AddButton;