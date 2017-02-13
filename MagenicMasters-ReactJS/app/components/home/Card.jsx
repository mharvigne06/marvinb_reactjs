var React = require("react");
var ReactBootstrap = require("react-bootstrap");

var Well = ReactBootstrap.Well;
var Card = React.createClass({
    render: function(){
        return (
            <Well className="text-center" style={{height:"250px"}}>
                Card
            </Well>
        );
    }
});


module.exports = Card;