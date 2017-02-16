import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import ReactRouter, {Link} from "react-router";


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
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;