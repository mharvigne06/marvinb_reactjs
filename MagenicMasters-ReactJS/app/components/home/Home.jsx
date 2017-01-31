var React = require("react");
var ReactBootstrap = require("react-bootstrap");

var Hero = require("./Hero.jsx");
var Section = require("./Section.jsx");
var Card = require("./Card.jsx");

var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Home = React.createClass({
    render: function(){
        return(
            <div>
                <Hero/>
                <div className="container">
                    <Row>
                        <Col sm={12}>
                            <Section/>
                        </Col>
                    </Row>
                </div>
                <div><p/></div>
                <div className="container">
                    <Row>
                     <Col sm={4}><Card/></Col>
                     <Col sm={4}><Card/></Col>
                     <Col sm={4}><Card/></Col>
                    </Row>
                </div>
            </div>
        );
    }
});

module.exports = Home;