var React = require("react");
var ReactBootstrap = require("react-bootstrap");

var PageHeader = ReactBootstrap.PageHeader;
var Hero = React.createClass({
    render: function(){
        return (
            <PageHeader className="text-center" style={{height:"200px"}} >
                Hero
            </PageHeader>
        );
    }
});


module.exports = Hero;