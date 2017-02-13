var React = require("react");
var ReactBootstrap = require("react-bootstrap");

var Well = ReactBootstrap.Well;
var Section = React.createClass({
    render: function(){
        return (
            <Well className="text-center" style={{height:"300px"}}>
                Section
            </Well>
        );
    }
});


module.exports = Section;