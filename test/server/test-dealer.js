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
        var config = {'1' : 1, '2' : 2};
        var deck = self.dealer.initDeck(config);

        assert.same(deck.length, 3);
        assert.equals(deck[0], {rank : 1});
        assert.equals(deck[1], {rank : 2});
        assert.equals(deck[2], {rank : 2});
    });

    it("can shuffle a deck", function () {
        var config = {'1' : 1, '2' : 2, '3' : 3, '4': 4};
        var unshuffledDeck = self.dealer.initDeck(config);
        var deck = unshuffledDeck.splice();
        var shuffledDeck = self.dealer.shuffle(deck);

        refute.equals(shuffledDeck, unshuffledDeck);
    });


});