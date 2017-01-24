var React = require("react");
var ReactDOM = require("react-dom");
var ReactBootstrap = require("react-bootstrap");
var Header = require("./components/header.js");
var Hero = require("./components/hero.js");
var Section = require("./components/section.js");
var Card = require("./components/card.js");
var Footer = require("./components/footer.js");

var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var Welcome = React.createClass({
    render: function(){
        return(
            <div>
                <Header/>
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
                <div><p/></div>
                <Footer/>
            </div>
        );
    }
});
ReactDOM.render(
    <div>
        <Welcome/>
    </div>,
    document.getElementById("root")
);