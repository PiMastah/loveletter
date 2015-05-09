var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;

var cardPolicy = require('../../../../src/server/policy/card/guard');
var stateFactory = require('../../../../src/server/gamestate');
var cardFactory = require('../../../../src/server/card');

buster.spec.expose();

describe("A guard", function () {
    var self = this;
    buster.spec.before(function () {
        self.state = stateFactory.create();
        self.state.players = ['Alice', 'Bob'];
        self.state.remainingPlayers = ['Alice', 'Bob'];
        self.state.hands[0] = [cardFactory.create(1)];
        self.state.hands[1] = [cardFactory.create(2)];
    });

    it("can guess incorrectly", function () {
        var opponent = 1;
        var rank = 3;
        cardPolicy(self.state, opponent, rank);
        assert.equals(self.state.remainingPlayers, self.state.players);
    });

    it("can guess correctly", function () {
        var opponent = 1;
        var rank = 2;
        cardPolicy(self.state, opponent, rank);
        assert.same(self.state.remainingPlayers.length, 1);
        refute.contains(self.state.remainingPlayers, self.state.players[opponent]);
        assert.contains(self.state.remainingPlayers, self.state.players[0]);
    });
});