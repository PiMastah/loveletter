var cardFactory = require('./card');

module.exports = {
    create: function () {
        return new Dealer();
    }
};

var Dealer = function () {
    return this;
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Dealer.prototype.shuffleDeck = function() {
    if (this.deck && this.deck.length) {
        this.deck.forEach(function (card, index, cards) {
            var remaining = cards.length - index;
            var moveFromIndex = getRandomInt(index, index + remaining - 1);
            var	temp = cards[index];

            cards[index] = cards[moveFromIndex];
            cards[moveFromIndex] = temp;
        });
    }
};

Dealer.prototype.initDeck = function() {
    var deck = [];
    for (var rank in this.deckConfig) {
        rank = parseInt(rank);
        for (var i = 0; i < this.deckConfig[rank]; i++) {
            deck.push(cardFactory.create(rank));
        }
    }
    this.deck = deck;
};

Dealer.prototype.drawCard = function() {
    return this.deck.shift();
};