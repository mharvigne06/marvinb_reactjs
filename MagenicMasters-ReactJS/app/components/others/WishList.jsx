'use strict';

var React = require('react');
var WishListItem = require('./WishListItem');

var WishList = React.createClass({
    propTypes: {
        wishTitle: React.PropTypes.string,
        wishData: React.PropTypes.array.isRequired,
        handleNewWishChange : React.PropTypes.func.isRequired,
        newWishText: React.PropTypes.string.isRequired,
        onAddButtonClick: React.PropTypes.func.isRequired
    },
    getDefaultProps: function () {
        return {
            wishTitle: 'My Default Title'
        };
    },
    renderItems: function () {
        return this.props.wishData.map(function (item) {
            return (
                <WishListItem
                    key={item.id}
                    wishName={item.name} />
            );
        }, this);
    },
    render: function () {
        return (
            <ul className="list-group">
                <li className="list-group-item list-group-item-info">{this.props.wishTitle}</li>
                {this.renderItems()}
                <li className="list-group-item">
                    <input 
                        type="text"
                        onChange={this.props.handleNewWishChange}
                        value={this.props.newWishText} />
                    <button 
                        onClick={this.props.onAddButtonClick}
                        className="btn btn-primary">
                        Add
                    </button>
                </li>
            </ul>
        );
    }
});

module.exports = WishList;