var cardFactory = require('./card');

module.exports = {
    create: function () {
        return new Deck();
    }
};

var Deck = function () {
    return this;
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Deck.prototype.shuffle = function() {
    if (this.cards && this.cards.length) {
        this.cards.forEach(function (card, index, cards) {
            var remaining = cards.length - index;
            var moveFromIndex = getRandomInt(index, index + remaining - 1);
            var	temp = cards[index];

            cards[index] = cards[moveFromIndex];
            cards[moveFromIndex] = temp;
        });
    }
};

Deck.prototype.initDeck = function() {
    var cards = [];
    for (var rank in this.deckConfig) {
        rank = parseInt(rank);
        for (var i = 0; i < this.deckConfig[rank]; i++) {
            cards.push(cardFactory.create(rank));
        }
    }
    this.cards = cards;
};

Deck.prototype.drawCard = function() {
    if (this.cards.length > 0) {
        return this.cards.shift();
    } else {
        return false;
    }
};