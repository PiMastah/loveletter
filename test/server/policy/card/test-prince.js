var buster = require("buster");
var assert = buster.assert;
var refute = buster.refute;

var cardPolicy = require('../../../../src/server/policy/card/prince');
var stateFactory = require('../../../../src/server/gamestate');
var cardFactory = require('../../../../src/server/card');

buster.spec.expose();

describe("A Prince", function () {
    var self = this;
    buster.spec.before(function () {
        self.state = stateFactory.create();
        self.state.players = ['Alice', 'Bob'];
        self.state.remainingPlayers = ['Alice', 'Bob'];

    });
    it("makes a player discard his hand", function () {
        var opponent = 1;
        self.state.hands[opponent] = [cardFactory.create('1')];
        self.state.discardHand = this.spy();

        cardPolicy(self.state, opponent);

        assert.called(self.state.discardHand);
    });

});
