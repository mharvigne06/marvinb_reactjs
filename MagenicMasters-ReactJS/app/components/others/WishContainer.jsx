'use strict';

var React = require('react');
var WishList = require('./WishList');
var _ = require('lodash');

var data = [
    { id: 1, name: 'Good Health' },
    { id: 2, name: 'Peace of Mind' }
];

var WishContainer = React.createClass({
    getInitialState: function () {
        return {
            newWishText: '',
            wishData: data
        };
    },
    handleNewWishTextChange: function (event) {
        var value = event.target.value;

        this.setState({
            newWishText: value
        });
    },
    handleAddButtonClick: function () {
        var newWish = {
            id: this.generateId(),
            name: this.state.newWishText
        };

        var newWishData = this.state.wishData.concat(newWish);

        this.setState({
            wishData: newWishData,
            newWishText: ''
        });
    },
    generateId: function () {
        var max = _.maxBy(this.state.wishData, function (d) {
            return d.id;
        });

        return max.id + 1;
    },
    render: function () {
        return (
            <div>
                <WishList
                    newWishText={this.state.newWishText}
                    handleNewWishChange={this.handleNewWishTextChange}
                    onAddButtonClick={this.handleAddButtonClick}
                    wishData={this.state.wishData} />
            </div>
        );
    }
});

module.exports = WishContainer;