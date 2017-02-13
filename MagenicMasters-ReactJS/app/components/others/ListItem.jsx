'use strict';

var React = require('react');

var ListItem = React.createClass({
    propTypes: {
        customClassName: React.PropTypes.string,
        itemText: React.PropTypes.string.isRequired
    },
    getClassName: function () {
        return 'list-group-item ' + this.props.customClassName;
    },
    render: function () {
        return (
            <li className={this.getClassName()}>{this.props.itemText}</li>
        );
    }
});

module.exports = ListItem;