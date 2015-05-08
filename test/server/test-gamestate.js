var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;

var stateFactory = require('../../src/server/gamestate');

buster.spec.expose();

describe("Game state", function () {
    var self = this;
    buster.spec.before(function () {
        self.state = stateFactory.create();
    });

    it("can be created", function () {
        assert('object' === typeof self.state);
    });

    it("contains players", function () {
        assert(undefined !== self.state.players);
    });

    it("knows the starting player", function () {
        assert(undefined !== self.state.startingPlayer);
    });

    it("knows the current player", function () {
        assert(undefined !== self.state.currentPlayer);
    });

    it("knows the current scores", function () {
        assert(undefined !== self.state.scores);
    });

    it("knows each players cards", function () {
        assert(undefined !== self.state.hands);
    });

    it("knows the cards that each player has played", function () {
        assert(undefined !== self.state.playedCards);
    });

    it("knows the state of the deck", function () {
        assert(undefined !== self.state.deck);
    });

    it("knows the cards that have been removed", function () {
        assert(undefined !== self.state.discardedCards);
    });
});