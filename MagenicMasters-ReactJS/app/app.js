<<<<<<< HEAD
import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactBootstrap from "react-bootstrap";
import ReactRouter, { Router, Route, IndexRoute, browserHistory } from "react-router";

import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";

import Home from "./components/home/Home.jsx";
import Tasks from "./components/tasks/Tasks.jsx";

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
=======
var React = require("react");
var ReactDOM = require("react-dom");
var ReactBootstrap = require("react-bootstrap");
var ReactRouter = require("react-router");

var Header = require("./components/common/Header.jsx");
var Footer = require("./components/common/Footer.jsx");

var Home = require("./components/home/Home.jsx");
var Tasks = require("./components/tasks/Tasks.jsx");

var Layout = React.createClass({
    render: function(){
        return(
            <div>
                <Header/>
>>>>>>> refs/remotes/origin/dev
                <div>
                    {this.props.children}
                </div>
                <div><p /></div>
                <Footer />
            </div>
        );
    }
<<<<<<< HEAD
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
            <Route path="Tasks" component={Tasks} />
        </Route>
    </Router>,
=======
});

ReactDOM.render(
    <ReactRouter.Router history={ReactRouter.browserHistory}>
        <ReactRouter.Route path="/" component={Layout}>
            <ReactRouter.IndexRoute component={Home}/>
            <ReactRouter.Route path="Tasks" component={Tasks}/>
        </ReactRouter.Route>
    </ReactRouter.Router>,
>>>>>>> refs/remotes/origin/dev
    document.getElementById("root")
);