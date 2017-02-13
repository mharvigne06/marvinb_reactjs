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
                <div>
                    {this.props.children}
                </div>
                <div><p/></div>
                <Footer/>
            </div>
        );
    }
});

ReactDOM.render(
    <ReactRouter.Router history={ReactRouter.browserHistory}>
        <ReactRouter.Route path="/" component={Layout}>
            <ReactRouter.IndexRoute component={Home}/>
            <ReactRouter.Route path="Tasks" component={Tasks}/>
        </ReactRouter.Route>
    </ReactRouter.Router>,
    document.getElementById("root")
);