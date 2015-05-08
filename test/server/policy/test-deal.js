var buster = require("buster");
var assert = buster.assert;

var dealPolicy = require('../../../src/server/policy/deal');
var dealerFactory = require('../../../src/server/dealer');
var stateFactory = require('../../../src/server/gamestate');

buster.spec.expose();

describe("When Dealing cards", function () {
    var self = this;
    buster.spec.before(function () {
        self.dealer = dealerFactory.create();
        self.state = stateFactory.create();
        self.state.players = ['Alice', 'Bob'];
        self.dealer.deckConfig = {'1' : 5, '2' : 2, '3': 2, '4' : 2, '5': 2, '6': 1, '7': 1, '8': 1};
        self.dealer.initDeck();
        self.dealer.shuffleDeck();
        dealPolicy(self.state, self.dealer);
    });

    it("each player gets a card", function () {
        assert(2 === self.state.hands.length);
        assert(1 === self.state.hands[0].length);
        assert(1 === self.state.hands[1].length);
    });

    it("four cards are discarded", function () {
        assert(4 === self.state.discardedCards.length);
    });

    it("the remaining ten cards are placed in the stack", function () {
        assert(10 === self.state.deck.length);
    });
});