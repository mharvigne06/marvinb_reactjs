import React, { Component } from "react";
import ReactBootstrap, { Nav, NavItem } from "react-bootstrap";
import ReactRouter, { Link } from "react-router";
import PriorityTaskListPopover from "./PriorityTaskListPopover.jsx";


class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">My ReactJS Site</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/" activeClassName="active">Home</Link></li>
                            <li><Link to="/Tasks" activeClassName="active">Tasks</Link></li>
                        </ul>
                        <PriorityTaskListPopover />
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;