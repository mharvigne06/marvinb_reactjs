var React = require("react");
var ReactBootstrap = require("react-bootstrap");
var ReactRouter = require("react-router");


var Header = React.createClass({
    render: function(){
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">My ReactJS Site</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><ReactRouter.Link to="/" activeClassName="active">Home</ReactRouter.Link></li>
                            <li><ReactRouter.Link to="/Tasks" activeClassName="active">Tasks</ReactRouter.Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
});

module.exports = Header;