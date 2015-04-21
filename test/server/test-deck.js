var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;

var deckFactory = require('../../src/server/deck');

buster.spec.expose();

describe("A deck", function () {
    var self = this;
    buster.spec.before(function () {
        self.deck = deckFactory.create();
    });

    it("can initiate a new deck", function () {
        var config = {'1' : 1, '2' : 2};
        var deck = self.deck.initDeck(config);

        assert.same(deck.length, 3);
        assert.equals(deck[0], {rank : 1});
        assert.equals(deck[1], {rank : 2});
        assert.equals(deck[2], {rank : 2});
    });

    it("can shuffle a deck", function () {
        var config = {'1' : 1, '2' : 2, '3' : 3};
        var unshuffledDeck = self.deck.initDeck(config);
        var deck = unshuffledDeck.splice();
        var shuffledDeck = self.deck.shuffle(deck);

        refute.equals(shuffledDeck, unshuffledDeck);
    })
});