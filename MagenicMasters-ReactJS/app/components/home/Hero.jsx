import React, { Component } from "react";
import ReactBootstrap, {PageHeader} from "react-bootstrap";

class Hero extends Component {
    render() {
        return (
            <PageHeader className="text-center" style={{ height: "200px" }} >
                Hero
            </PageHeader>
        );
    }
}


export default Hero;