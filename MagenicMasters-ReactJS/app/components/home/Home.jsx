import React, { Component } from "react";
import ReactBootstrap, {Row, Col} from "react-bootstrap";

import Hero from "./Hero.jsx";
import Section from "./Section.jsx";
import Card from "./Card.jsx";

class Home extends Component {
    render() {
        return (
            <div>
                <Hero />
                <div className="container">
                    <Row>
                        <Col sm={12}>
                            <Section />
                        </Col>
                    </Row>
                </div>
                <div><p /></div>
                <div className="container">
                    <Row>
                        <Col sm={4}><Card /></Col>
                        <Col sm={4}><Card /></Col>
                        <Col sm={4}><Card /></Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Home;