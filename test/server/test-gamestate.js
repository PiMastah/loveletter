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
        assert.equals(self.state.deck, self.deck);
    });

    it("knows the cards that have been removed", function () {
        assert.defined(self.state.discardedCards);
    });

    it("can remove a player from the round", function () {
        var players = ['Alice', 'Bob'];
        self.state.players = players;
        self.state.remainingPlayers = players;
        var index = 1;

        self.state.removePlayer(index);
        refute.contains(self.state.remainingPlayers, self.state.players[index]);
    });
});