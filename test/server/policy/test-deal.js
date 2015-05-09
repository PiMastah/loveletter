var buster = require("buster");
var assert = buster.assert;

var dealPolicy = require('../../../src/server/policy/deal');
var deckFactory = require('../../../src/server/deck');
var stateFactory = require('../../../src/server/gamestate');

buster.spec.expose();

describe("When Dealing cards", function () {
    var self = this;
    buster.spec.before(function () {
        self.deck = deckFactory.create();
        self.deck.deckConfig = {'1' : 5, '2' : 2, '3': 2, '4' : 2, '5': 2, '6': 1, '7': 1, '8': 1};
        self.deck.init();
        self.deck.shuffle();
        self.state = stateFactory.create(self.deck);
        self.state.players = ['Alice', 'Bob'];
        self.state.currentPlayer = 0;
        dealPolicy(self.state);
    });

    it("each player gets a card", function () {
        assert.same(self.state.hands.length, 2);
        assert.same(self.state.hands[0].length, 1);
        assert.same(self.state.hands[1].length, 1);
    });

    it("four cards are discarded", function () {
        assert.same(self.state.discardedCards.length, 4);
    });

    it("the remaining ten cards are placed in the stack", function () {
        assert.same(self.state.deck.cards.length, 10);
    });

    it("first we discard, then we deal cards to each player", function () {
        var deck = deckFactory.create();
        deck.deckConfig = {'1' : 1, '2' : 1, '3': 1, '4' : 1, '5': 1, '6': 1};
        deck.init();
        var state = stateFactory.create(deck);
        state.players = ['Alice', 'Bob'];
        state.currentPlayer = 0;
        dealPolicy(state);

        state.discardedCards.forEach(function (card, index) {
            assert.same(card.rank, index+1);
        });
        state.hands.forEach(function (hand, index) {
            assert.same(hand[0].rank, index+1+4);
        });
    });

    it("begin with current Player", function () {
        var deck = deckFactory.create();
        deck.deckConfig = {'0' : 4, '1' : 1, '2' : 1};
        deck.init();
        var state = stateFactory.create(deck);
        state.players = ['Alice', 'Bob'];

        state.currentPlayer = 1;
        dealPolicy(state);

        assert.same(state.hands[0][0].rank, 2);
        assert.same(state.hands[1][0].rank, 1);
    });
});