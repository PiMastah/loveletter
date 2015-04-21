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
    this.deck = this.initDeck();
    this.deck = this.shuffle(this.deck);

    return this;
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Dealer.prototype.shuffle = function(deck) {
    if (deck && deck.length) {
        deck.forEach(function (card, index, cards) {
            var remaining = cards.length - index;
            var moveFromIndex = getRandomInt(index, index + remaining - 1);
            var	temp = cards[index];

            cards[index] = cards[moveFromIndex];
            cards[moveFromIndex] = temp;
        });
    }

    return deck;
};

Dealer.prototype.initDeck = function(deckConfig) {
    var deck = [];
    for (var rank in deckConfig) {
        rank = parseInt(rank);
        for (var i = 0; i < deckConfig[rank]; i++) {
            deck.push(cardFactory.create(rank));
        }
    }
    return deck;
};

