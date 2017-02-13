'use strict';

var React = require('react');
var ListItem = require('../common/ListItem');

var WishListItem = React.createClass({
    render: function () {
        return (
            <ListItem
                itemText={this.props.wishName}
                customClassName="list-group-item-warning" />
        );
    }
});

module.exports = WishListItem;