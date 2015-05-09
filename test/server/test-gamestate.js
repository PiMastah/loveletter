var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;

var stateFactory = require('../../src/server/gamestate');
var deckFactory = require('../../src/server/deck');

buster.spec.expose();

describe("Game state", function () {
    var self = this;
    buster.spec.before(function () {
        self.deck = deckFactory.create();
        self.state = stateFactory.create(self.deck);
    });

    it("can be created", function () {
        assert.same(typeof self.state, 'object');
    });

    it("contains players", function () {
        assert.defined(self.state.players);
    });

    it("knows the remaining players", function () {
        assert.defined(self.state.remainingPlayers);
    });

    it("knows the starting player", function () {
        assert.defined(self.state.startingPlayer);
    });

    it("knows the current player", function () {
        assert.defined(self.state.currentPlayer);
    });

    it("knows the current scores", function () {
        assert.defined(self.state.scores);
    });

    it("knows each players cards", function () {
        assert.defined(self.state.hands);
    });

    it("knows the cards that each player has played", function () {
        assert.defined(self.state.playedCards);
    });

    it("knows the state of the deck", function () {
        assert.same(self.state.deck, self.deck);
    });

    it("knows the cards that have been removed", function () {
        assert.defined(self.state.discardedCards);
    });
});