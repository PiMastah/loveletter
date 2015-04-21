var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;

var dealerFactory = require('../../src/server/dealer');

buster.spec.expose();

describe("A dealer", function () {
    var self = this;
    buster.spec.before(function () {
        self.dealer = dealerFactory.create();
        self.dealer.deckConfig = {'1' : 1, '2' : 2, '3': 3, '4' : 4};
        self.dealer.initDeck();

    });

    it("can initiate a new deck", function () {
        assert.greater(self.dealer.deck.length, 0);
    });

    it("can shuffle a deck", function () {
        var unshuffledDeck = self.dealer.deck.splice();
        self.dealer.shuffleDeck();

        refute.equals(self.dealer.deck, unshuffledDeck);
    });

    it("can draw a card from the deck", function () {
        var initialDeckLength = self.dealer.deck.length;
        var firstCard = self.dealer.deck[0];
        var drawnCard = self.dealer.drawCard();

        assert.same(drawnCard, firstCard);
        assert.equals(self.dealer.deck.length, initialDeckLength - 1);
    });
});