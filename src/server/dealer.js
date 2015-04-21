var cardFactory = require('./card');

module.exports = {
    create: function () {
        return new Dealer();
    }
};

var Dealer = function () {
    this.deckConfig = {
        '1' : 5,
        '2' : 2,
        '3' : 2,
        '4' : 2,
        '5' : 2,
        '6' : 1,
        '7' : 1,
        '8' : 1
    };
    this.initDeck();
    this.shuffleDeck();

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