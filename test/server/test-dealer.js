var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;

var dealerFactory = require('../../src/server/dealer');

buster.spec.expose();

describe("A dealer", function () {
    var self = this;
    buster.spec.before(function () {
        self.dealer = dealerFactory.create();
    });

    it("can initiate a new deck", function () {
        self.dealer.deckConfig = {'1' : 1, '2' : 2};
        self.dealer.initDeck();

        assert.same(self.dealer.deck.length, 3);
        assert.equals(self.dealer.deck[0], {rank : 1});
        assert.equals(self.dealer.deck[1], {rank : 2});
        assert.equals(self.dealer.deck[2], {rank : 2});
    });

    it("can shuffle a deck", function () {
        self.dealer.initDeck();
        var unshuffledDeck = self.dealer.deck.splice();
        self.dealer.shuffleDeck();

        refute.equals(self.dealer.deck, unshuffledDeck);
    });

/*    it("can draw a card from the deck", function () {
        var config = {'1' : 1, '2' : 2};
        var deck = self.dealer.initDeck(config);
        self.dealer.deck = deck;
        var initialDeckLength = deck.length;
        var firstCard = deck[0];
        var drawnCard = self.dealer.drawCard();

        assert.same(drawnCard, firstCard);
        assert.equals(deck.length, initialDeckLength - 1);
    });*/
});