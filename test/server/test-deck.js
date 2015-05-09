var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;

var deckFactory = require('../../src/server/deck');

buster.spec.expose();

describe("A deck", function () {
    var self = this;
    buster.spec.before(function () {
        self.deck = deckFactory.create();
        self.deck.deckConfig = {'1' : 1, '2' : 2, '3': 3, '4' : 4};
        self.deck.initDeck();

    });

    it("can initiate a new deck", function () {
        assert.greater(self.deck.cards.length, 0);
    });

    it("can shuffle a deck", function () {
        var unshuffledDeck = self.deck.cards.splice();
        self.deck.shuffleDeck();

        refute.equals(self.deck.cards, unshuffledDeck);
    });

    it("can draw a card from the deck", function () {
        var initialDeckLength = self.deck.cards.length;
        var firstCard = self.deck.cards[0];
        var drawnCard = self.deck.drawCard();

        assert.same(drawnCard, firstCard);
        assert.equals(self.deck.cards.length, initialDeckLength - 1);
    });

    it("can not draw a card from the deck if it's empty", function () {
        self.deck.cards = [];
        var result = self.deck.drawCard();

        assert.isFalse(result);
    })
});