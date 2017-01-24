var React = require("react");
var ReactBootstrap = require("react-bootstrap");

var Well = ReactBootstrap.Well;
var Section = React.createClass({
    render: function(){
        return (
            <Well className="text-center" style={{height:"300px"}}>
                <h1>Section</h1>
            </Well>
        );
    }
});


module.exports = Section;