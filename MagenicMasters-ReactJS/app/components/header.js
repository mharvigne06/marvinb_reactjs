var React = require("react");
var ReactBootstrap = require("react-bootstrap");

var Jumbotron = ReactBootstrap.Jumbotron;

var Header = React.createClass({
    render: function(){
        return (
            <Jumbotron className="text-center">
                <h1>Header</h1>
            </Jumbotron>
        );
    }
});

module.exports = Header;