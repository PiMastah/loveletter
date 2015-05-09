var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;

var cardPolicy = require('../../../../src/server/policy/card/king');
var stateFactory = require('../../../../src/server/gamestate');
var cardFactory = require('../../../../src/server/card');

buster.spec.expose();

describe("A King", function () {
    var self = this;
    buster.spec.before(function () {
        self.state = stateFactory.create();
        self.state.players = ['Alice', 'Bob'];
        self.state.remainingPlayers = ['Alice', 'Bob'];
    });

    it("trades your hand with an opponent", function () {
        var ownHand = [cardFactory.create(1)];
        var opponentHand = [cardFactory.create(2)];
        var currentPlayer = 0;
        var opponent = 1;

        self.state.hands[currentPlayer] = ownHand;
        self.state.hands[opponent] = opponentHand;
        self.state.currentPlayer = currentPlayer;

        cardPolicy(self.state, opponent);

        assert.equals(self.state.hands[currentPlayer], opponentHand);
        assert.equals(self.state.hands[opponent], ownHand);
    });
});