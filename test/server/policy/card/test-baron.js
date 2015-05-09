var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;

var cardPolicy = require('../../../../src/server/policy/card/baron');
var stateFactory = require('../../../../src/server/gamestate');
var cardFactory = require('../../../../src/server/card');

buster.spec.expose();

describe("A baron", function () {
    var self = this;
    buster.spec.before(function () {
        self.state = stateFactory.create();
        self.state.players = ['Alice', 'Bob'];
        self.state.remainingPlayers = ['Alice', 'Bob'];

    });

    it("can compare hands and win", function () {
        var currentPlayer = 0;
        var opponent = 1;

        self.state.hands[currentPlayer] = [cardFactory.create(2)];
        self.state.hands[opponent] = [cardFactory.create(1)];
        self.state.currentPlayer = currentPlayer;

        cardPolicy(self.state, opponent);

        assert.same(self.state.remainingPlayers.length, 1);
        assert.contains(self.state.remainingPlayers, self.state.players[currentPlayer]);
        refute.contains(self.state.remainingPlayers, self.state.players[opponent]);
    });

    it("can compare hands and lose", function () {
        var currentPlayer = 0;
        var opponent = 1;

        self.state.hands[currentPlayer] = [cardFactory.create(1)];
        self.state.hands[opponent] = [cardFactory.create(2)];
        self.state.currentPlayer = currentPlayer;

        cardPolicy(self.state, opponent);

        assert.same(self.state.remainingPlayers.length, 1);
        assert.contains(self.state.remainingPlayers, self.state.players[opponent]);
        refute.contains(self.state.remainingPlayers, self.state.players[currentPlayer]);
    });

    it("can compare hands and draw", function () {
        var currentPlayer = 0;
        var opponent = 1;

        self.state.hands[currentPlayer] = [cardFactory.create(1)];
        self.state.hands[opponent] = [cardFactory.create(1)];
        self.state.currentPlayer = currentPlayer;

        cardPolicy(self.state, opponent);

        assert.equals(self.state.remainingPlayers, self.state.players);
    });
});