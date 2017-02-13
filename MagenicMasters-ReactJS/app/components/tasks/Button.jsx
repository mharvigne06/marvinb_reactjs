var React = require("react");

var Button = React.createClass({
    render: function(){
        return(
             <button type="button"  className={this.props.buttonClass} onClick={this.props.onClick} style={{display: this.props.disp}} >
                <span className={this.props.icon}/>
             </button>
        );
    }
});

module.exports = Button;