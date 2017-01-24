var React = require("react");
var ReactBootstrap = require("react-bootstrap");

var Well = ReactBootstrap.Well;
var Card = React.createClass({
    render: function(){
        return (
            <Well className="text-center">
                <h1>Card</h1>
            </Well>
        );
    }
});


module.exports = Card;