import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactBootstrap from "react-bootstrap";
import ReactRouter, { Router, Route, IndexRoute, browserHistory } from "react-router";

import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";

import Home from "./components/home/Home.jsx";
import Tasks from "./components/tasks/Tasks.jsx";
import Timer from "./components/timer/Timer.jsx";


class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    {this.props.children}
                </div>
                <div><p /></div>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
            <Route path="Tasks" component={Tasks} />
            <Route path="Timer" component={Timer} />
        </Route>
    </Router>,
    document.getElementById("root")
);