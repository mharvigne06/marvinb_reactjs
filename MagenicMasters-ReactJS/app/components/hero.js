var React = require("react");
var ReactBootstrap = require("react-bootstrap");

var PageHeader = ReactBootstrap.PageHeader;
var Hero = React.createClass({
    render: function(){
        return (
            <PageHeader className="text-center" style={{height:"200px"}} >
                <h1>Hero</h1>
            </PageHeader>
        );
    }
});


module.exports = Hero;